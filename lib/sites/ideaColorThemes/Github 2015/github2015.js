(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.github2015'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.github2015 = factory();
    }
}(this, function() {
    return [
        '#ffffcc',
        '#ffffff',
        '#e5e5e5',
        '#b7b7b7',
        '#bcd5fa',
        '#ffc8c8',
        '#108888',
        '#595959',
        '#ff00ff',
        '#ff0000',
        '#ffcc00',
        '#990000',
        '#333333',
        '#999988',
        '#dd1144',
        '#f7e7f1',
        '#445588',
        '#800080',
        '#121289',
        '#ffc8bd',
        '#ff6647',
        '#cbcbcb',
        '#747474',
        '#baeeba',
        '#99ff99',
        '#bccff9',
        '#99ccff',
        '#c3c3c3',
        '#f0f0f0',
        '#f49810',
        '#f8f8ff',
        '#e4e4ff',
        '#ccccff',
        '#cccccc',
        '#e2ffe2',
        '#808080',
        '#ffcccc',
        '#f7e9e9',
        '#edfced',
        '#aa2c8c',
        '#795da3',
        '#183691',
        '#a71d5d',
        '#999999',
        '#660e7a',
        '#ffff00',
        '#ffe4ff',
        '#ffcdff'
    ];
}));