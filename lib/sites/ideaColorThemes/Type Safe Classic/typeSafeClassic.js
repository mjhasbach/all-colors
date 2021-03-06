(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.typeSafeClassic'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.typeSafeClassic = factory();
    }
}(this, function() {
    return [
        '#808000',
        '#ffcccc',
        '#c57633',
        '#e7ffb3',
        '#5a5a5a',
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
        '#cdcd00',
        '#660e7a',
        '#660000',
        '#93a1a1',
        '#3d3d3d',
        '#feffda',
        '#595050',
        '#30a628',
        '#fefbf3',
        '#195f91',
        '#83b925',
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
        '#c0c0c0',
        '#bbdfff',
        '#dff0ff',
        '#ccffcc',
        '#ffa500',
        '#99ccff',
        '#ffffd7',
        '#e2ffe2',
        '#a9a9a9',
        '#8ac5c6',
        '#ffff00',
        '#43bac2',
        '#20999d',
        '#ffdcdc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));