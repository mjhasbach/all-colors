(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.goodGithub'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.goodGithub = factory();
    }
}(this, function() {
    return [
        '#f5f5f5',
        '#999999',
        '#c8c8fa',
        '#795da3',
        '#ffcccc',
        '#808080',
        '#ffc8c8',
        '#5c5cff',
        '#555555',
        '#7f0000',
        '#aaaaaa',
        '#ff00ff',
        '#cd00cd',
        '#ff0000',
        '#cd0000',
        '#ffffff',
        '#eaea00',
        '#c4a000',
        '#660e7a',
        '#660000',
        '#969896',
        '#a71d5d',
        '#3d3d3d',
        '#ed6a43',
        '#183691',
        '#efefef',
        '#f7faff',
        '#c3c3c3',
        '#f0f0f0',
        '#404040',
        '#ffded8',
        '#ffc8bd',
        '#d6d6d6',
        '#cbcbcb',
        '#387ee7',
        '#c8f2c8',
        '#baeeba',
        '#cad9fa',
        '#bccff9',
        '#dae7c0',
        '#f5f7f0',
        '#f6ebbc',
        '#666666',
        '#ecfaeb',
        '#e9e9e9',
        '#f49810',
        '#e4e4ff',
        '#ccccff',
        '#cccccc',
        '#ffffcc',
        '#edfced',
        '#ccffcc',
        '#ffa500',
        '#99ccff',
        '#ffffd7',
        '#e2ffe2',
        '#a9a9a9',
        '#333333',
        '#ffff00',
        '#ffdcdc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));