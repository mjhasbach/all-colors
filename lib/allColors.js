if (typeof exports === 'object' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}

define(function (require, exports, module) {
    var ideaColorThemes = require('./sites/ideaColorThemes/ideaColorThemes.js');

    module.exports = {
        ideaColorThemes: ideaColorThemes
    };
});