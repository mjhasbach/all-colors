(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.tuteta'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.tuteta = factory();
    }
}(this, function() {
    return [
        '#f5f5f5',
        '#858585',
        '#efb4b5',
        '#787878',
        '#ceeafa',
        '#565656',
        '#d1d1d1',
        '#ffc8c8',
        '#7a0874',
        '#cdcd00',
        '#e79d00',
        '#999999',
        '#e930eb',
        '#ff0000',
        '#12bd5e',
        '#660e7a',
        '#660000',
        '#808080',
        '#808000',
        '#cc0000',
        '#919191',
        '#d6d6d6',
        '#cbcbcb',
        '#c8f2c8',
        '#baeeba',
        '#cad9fa',
        '#bccff9',
        '#ffffff',
        '#868686',
        '#d2d2d2',
        '#f49810',
        '#6ff',
        '#363636',
        '#ccccff',
        '#515151',
        '#ffffcc',
        '#f9cdca',
        '#c0c0c0',
        '#595959',
        '#409101',
        '#ec426d',
        '#ce6200',
        '#ff3df4',
        '#990099',
        '#4baa01',
        '#e3013d',
        '#ff7a01',
        '#ccffcc',
        '#ffcccc',
        '#2b96d6',
        '#9a9a9a',
        '#ff5233',
        '#59ad17',
        '#800080',
        '#cc0033',
        '#333333',
        '#7f0000',
        '#3c3c3c',
        '#ffff00',
        '#ebc700',
        '#d5d5d5'
    ];
}));