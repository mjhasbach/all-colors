(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.sciTE'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.sciTE = factory();
    }
}(this, function() {
    return [
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
        '#e5fafc',
        '#ff0000',
        '#cd0000',
        '#ffffff',
        '#eaea00',
        '#cdcd00',
        '#7f007f',
        '#ff8f2f',
        '#589df6',
        '#660e7a',
        '#660000',
        '#3d3d3d',
        '#e2ffe2',
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
        '#c37522',
        '#297bde',
        '#e4e4ff',
        '#ccccff',
        '#cccccc',
        '#ffffcc',
        '#edfced',
        '#ffefbf',
        '#ccffcc',
        '#ffa500',
        '#99ccff',
        '#e3fcff',
        '#fff8f8',
        '#d9d9f0',
        '#cadaba',
        '#800080',
        '#ffff00',
        '#20999d',
        '#ffdcdc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));