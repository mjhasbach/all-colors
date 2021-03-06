(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.brackets'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.brackets = factory();
    }
}(this, function() {
    return [
        '#EAEAEA',
        '#535358',
        '#E0E0FF',
        '#A2A2A2',
        '#F8F8F8',
        '#FFCFBB',
        '#FFDF99',
        '#AB2525',
        '#426DC0',
        '#F38C00',
        '#000000',
        '#B05A65',
        '#AD95AF',
        '#CC9393',
        '#566874',
        '#885D3B',
        '#0A0B0C',
        '#416DBF',
        '#BC5A65',
        '#9B5656',
        '#808080',
        '#8757C4',
        '#728E00',
        '#C4C4B7'
    ];
}));