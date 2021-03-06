(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.realGithub'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.realGithub = factory();
    }
}(this, function() {
    return [
        '#ffffcc',
        '#ffffff',
        '#e5e5e5',
        '#b7b7b7',
        '#bcd5fa',
        '#ffcccc',
        '#ffc8c8',
        '#981351',
        '#d6420e',
        '#108888',
        '#2e2e2e',
        '#1e3473',
        '#29afad',
        '#7f0000',
        '#595959',
        '#6b4d96',
        '#e5fafc',
        '#ffcc00',
        '#808080',
        '#3b73b9',
        '#fde7e7',
        '#900090',
        '#1378a7',
        '#800000',
        '#404040',
        '#990000',
        '#660e7a',
        '#660000',
        '#999988',
        '#dd1144',
        '#f7e7f1',
        '#888a88',
        '#800080',
        '#333333',
        '#121289',
        '#c3c3c3',
        '#f0f0f0',
        '#ff6647',
        '#e1e1e1',
        '#747474',
        '#e5ffe5',
        '#99ff99',
        '#bccff9',
        '#99ccff',
        '#f5f7f0',
        '#ff0000',
        '#e9e9e9',
        '#f49810',
        '#f8f8ff',
        '#e4e4ff',
        '#ccccff',
        '#cccccc',
        '#edfced',
        '#e2ffe2',
        '#f7e9e9',
        '#ccffcc',
        '#555555',
        '#ffa500',
        '#445588',
        '#77808b',
        '#aa2c8c',
        '#999999',
        '#fefefe',
        '#ffff00',
        '#ffdcdc',
        '#f6ebbc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));