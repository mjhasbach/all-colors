(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.codeBlocks'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.codeBlocks = factory();
    }
}(this, function() {
    return [
        '#646464',
        '#ffcccc',
        '#808080',
        '#ffc8c8',
        '#a0a0a0',
        '#a9b7c6',
        '#7a7a43',
        '#5c5cff',
        '#555555',
        '#7f0000',
        '#aaaaaa',
        '#ff00ff',
        '#cd00cd',
        '#e5fafc',
        '#ff0000',
        '#cd0000',
        '#ffffff',
        '#eaea00',
        '#cdcd00',
        '#660e7a',
        '#660000',
        '#3f5fbf',
        '#7f9fbf',
        '#3d3d3d',
        '#7f7f9f',
        '#e2ffe2',
        '#f000f0',
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
        '#e8bf6a',
        '#ffffd7',
        '#a9a9a9',
        '#ffff00',
        '#20999d',
        '#ffdcdc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));