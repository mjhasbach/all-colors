(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.oughsumm'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.oughsumm = factory();
    }
}(this, function() {
    return [
        '#3F7F60',
        '#F7F7DC',
        '#FFDDAA',
        '#808080',
        '#FFFCF9',
        '#101010',
        '#E0F0C0',
        '#F0D0D0',
        '#FFFFEE',
        '#0F0F0F',
        '#2A7070',
        '#A020A0',
        '#0080C0',
        '#000000',
        '#8F8F7A',
        '#408080',
        '#029B7C',
        '#DA8A40',
        '#804000',
        '#004080',
        '#0B0B0B',
        '#8080C0',
        '#1A4ACA',
        '#3A1ACA'
    ];
}));