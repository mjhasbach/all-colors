var fs = require('fs'),
    _ = require('lodash'),
    path = require('path'),
    async = require('async'),
    slugify = require('slug'),
    mkdirp = require('mkdirp'),
    cheerio = require('cheerio'),
    request = require('request'),
    jsonFile = require('jsonFile'),
    camelCase = require('camel-case'),
    isKeyword = require('is-keyword-js'),
    capitalize = require('to-capital-case'),
    extractColors = require('markup-color-extractor'),
    condenseWhitespace = require('condense-whitespace');

require('thot-cwd');

var concurrency = 5,
    failCount = 0,
    failThreshold = 100,
    noMoreThemes = false,
    pathArr = process.cwd().split(path.sep),
    site = pathArr[pathArr.length - 1],
    url = 'http://www.' + site + '.org',
    configFile = path.join('..', '..', 'config.json'),
    config = jsonFile.readFileSync(configFile),
    count = _.isNumber(config[site]) ? config[site] + 1 : 1,
    lastThemeNumber = count,
    queue = async.queue(function(task, cb) {
        request(url + '/themes/' + task.themeNumber, function(err, res, body) {
            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(body);

                extractColors.from.url({
                    url: url + $('.btn-download-theme').attr('href'),
                    attributes: ['value'],
                    cb: function(err, colors) {
                        if (err){
                            cb(err);
                            return;
                        }

                        colors = _.map(colors, function(color) {
                            return '#' + color;
                        });

                        $('a').remove();

                        var folderName = condenseWhitespace(capitalize(slugify($('h1').text().trim()))),
                            themePath = path.resolve(__dirname, folderName),
                            fileName = camelCase(folderName);

                        if (isKeyword(fileName)){
                            fileName += 'Theme';
                        }

                        async.series([
                            async.apply(mkdirp, themePath),
                            function(done) {
                                async.parallel([
                                    function(fin) {
                                        fs.createWriteStream(path.join(themePath, fileName + '.txt'))
                                            .write(colors.join('\n'), fin);
                                    },
                                    function(fin) {
                                        fs.createWriteStream(path.join(themePath, fileName + '.array'))
                                            .write(JSON.stringify(colors), fin);
                                    }
                                ], done);
                            }
                        ], cb);
                    }
                });
            }
            else {
                failCount++;

                if (failCount >= failThreshold){
                    noMoreThemes = true;
                    config[site] = lastThemeNumber;

                    queue.kill();

                    jsonFile.writeFile(configFile, config, function(err) {
                        if (err) { throw err; }
                    });
                }

                cb('invalid theme');
            }
        });
    }, concurrency);

async.until(
    function() { return noMoreThemes; },
    function(cb) {
        var task = {themeNumber: count++};

        queue.push(task, function(err){
            if (!err) {
                failCount = 0;
                lastThemeNumber = task.themeNumber;
            }
        });

        _.delay(cb, 100);
    },
    function(err) {
        if (err) { throw err; }
    }
);