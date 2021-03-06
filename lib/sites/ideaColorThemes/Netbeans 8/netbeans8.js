(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.netbeans8'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.netbeans8 = factory();
    }
}(this, function() {
    return [
        '#a1f2ac',
        '#eeeeee',
        '#ffffff',
        '#cccccc',
        '#a0a9f9',
        '#ffc8c8',
        '#b7b7b7',
        '#ce7b00',
        '#d25252',
        '#868686',
        '#808080',
        '#ffded8',
        '#ffc8bd',
        '#d6d6d6',
        '#cbcbcb',
        '#c8f2c8',
        '#baeeba',
        '#bccff9',
        '#f5f7f0',
        '#ff0000',
        '#e9e9e9',
        '#f4e803',
        '#eceba3',
        '#ffffcc',
        '#660e7a',
        '#ccffcc',
        '#ffcccc',
        '#99ccff',
        '#f49810',
        '#d8d8d8',
        '#ffdcdc',
        '#f6ebbc',
        '#ffff00'
    ];
}));