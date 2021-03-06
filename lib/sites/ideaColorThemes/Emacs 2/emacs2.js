(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.emacs2'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.emacs2 = factory();
    }
}(this, function() {
    return [
        '#e8f2fe',
        '#f07746',
        '#228b22',
        '#238b83',
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
        '#bc8f8f',
        '#f5f7f0',
        '#f6ebbc',
        '#666666',
        '#ecfaeb',
        '#e9e9e9',
        '#f49810',
        '#afeeee',
        '#b8860b',
        '#cccccc',
        '#ffffcc',
        '#edfced',
        '#5f9ea0',
        '#800080',
        '#ffffe0',
        '#b22222',
        '#ffb700',
        '#ffa500',
        '#99ccff',
        '#ffff00',
        '#ffdcdc',
        '#ffa100'
    ];
}));