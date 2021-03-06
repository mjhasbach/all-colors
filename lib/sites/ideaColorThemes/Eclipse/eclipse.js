(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.eclipse'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.eclipse = factory();
    }
}(this, function() {
    return [
        '#d8d8d8',
        '#ffffff',
        '#333333',
        '#666666',
        '#ffc8c8',
        '#557f5f',
        '#ff0000',
        '#7f0055',
        '#552200',
        '#3f55bf',
        '#7f9fbf',
        '#990099',
        '#ff5809',
        '#990000',
        '#ffded8',
        '#ffc8bd',
        '#d6d6d6',
        '#cbcbcb',
        '#c8f2c8',
        '#baeeba',
        '#cad9fa',
        '#bccff9',
        '#f5f7f0',
        '#e9e9e9',
        '#f49810',
        '#3f7f7f',
        '#cccccc',
        '#ffffcc',
        '#660e7a',
        '#ccffcc',
        '#ffcccc',
        '#99ccff',
        '#808080',
        '#ffffd7',
        '#e2ffe2',
        '#a9a9a9',
        '#ffdcdc',
        '#f6ebbc',
        '#ffff00'
    ];
}));