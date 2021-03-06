(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.vibrantUnknownDarcula'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.vibrantUnknownDarcula = factory();
    }
}(this, function() {
    return [
        '#407f40',
        '#91ccff',
        '#81c66f',
        '#ffffff',
        '#323200',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#333333',
        '#999999',
        '#4d6f98',
        '#5b5b42',
        '#1c2d42',
        '#202020',
        '#35493c',
        '#808080',
        '#c0c0c0',
        '#364b3e',
        '#9acd9a',
        '#b3e633',
        '#a2cff5',
        '#e64f4f',
        '#e66600',
        '#a83ee6',
        '#fffab1',
        '#e6e199',
        '#e6b531',
        '#44b4cc',
        '#63e600',
        '#ffcc33',
        '#8080ff',
        '#80ffff',
        '#a0a0a0',
        '#80ff80',
        '#ff80ff',
        '#ff8080',
        '#ffff00',
        '#e67373',
        '#7ab4e6',
        '#589df6',
        '#90b4cd',
        '#ffcccc',
        '#ccff33',
        '#9933cc',
        '#ff6600',
        '#66ff00',
        '#659b58',
        '#fd6600',
        '#c3c3c3',
        '#5f2d2d',
        '#8f5247',
        '#4b4b4b',
        '#656e76',
        '#1f3e1f',
        '#447152',
        '#2a3f5f',
        '#43698d',
        '#505050',
        '#424242',
        '#999966',
        '#364b3d',
        '#f7b891',
        '#cccccc',
        '#ffdcd4',
        '#f9b2b2',
        '#99cc99',
        '#ccffcc',
        '#ffffcc',
        '#ff0000',
        '#83a6c1',
        '#3c5f8c',
        '#d8a92f',
        '#50f050',
        '#a0ffa0',
        '#98d44a',
        '#619655',
        '#e8d3d3',
        '#f6f6d0',
        '#d2f7d2',
        '#660e7a',
        '#ebebf5',
        '#8c3c66',
        '#582a82',
        '#800080'
    ];
}));