(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.github2'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.github2 = factory();
    }
}(this, function() {
    return [
        '#795da3',
        '#a71d5d',
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
        '#cc7832',
        '#3d3d3d',
        '#e2ffe2',
        '#808000',
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
        '#9876aa',
        '#df5000',
        '#ccffcc',
        '#ffa500',
        '#2b2b2b',
        '#99ccff',
        '#e8bf6a',
        '#ffffd7',
        '#a9a9a9',
        '#d0d0ff',
        '#ffff00',
        '#20999d',
        '#ffdcdc',
        '#ffe4ff',
        '#ffcdff',
        '#bc0000'
    ];
}));