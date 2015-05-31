(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.lumicode'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.lumicode = factory();
    }
}(this, function() {
    return [
        '#f7f2ff',
        '#303174',
        '#808000',
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
        '#cdcd00',
        '#660e7a',
        '#660000',
        '#8a8a8a',
        '#fafafa',
        '#288db3',
        '#f5fcff',
        '#3d3d3d',
        '#b8520e',
        '#563a89',
        '#265aa1',
        '#cdfacb',
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
        '#abacff',
        '#cccccc',
        '#ffffcc',
        '#edfced',
        '#ccffcc',
        '#ffa500',
        '#99ccff',
        '#ccccff',
        '#ffffd7',
        '#e2ffe2',
        '#a9a9a9',
        '#ffff00',
        '#20999d',
        '#99d998',
        '#ffdcdc',
        '#ffcd14',
        '#c9ffc1',
        '#86ff8b',
        '#baffb7'
    ];
}));