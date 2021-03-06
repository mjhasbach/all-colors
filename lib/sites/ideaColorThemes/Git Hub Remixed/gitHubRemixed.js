(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.gitHubRemixed'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.gitHubRemixed = factory();
    }
}(this, function() {
    return [
        '#999988',
        '#ffcccc',
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
        '#dd1144',
        '#445588',
        '#660e7a',
        '#660000',
        '#808080',
        '#e2ffe2',
        '#c3c3c3',
        '#f0f0f0',
        '#404040',
        '#ffded8',
        '#ffc8bd',
        '#d6d6d6',
        '#cbcbcb',
        '#c8f2c8',
        '#baeeba',
        '#cad9fa',
        '#bccff9',
        '#f5f7f0',
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
        '#990000',
        '#333333',
        '#800080',
        '#ffff00',
        '#ffdcdc',
        '#f6ebbc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));