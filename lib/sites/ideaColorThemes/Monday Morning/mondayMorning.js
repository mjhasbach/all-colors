(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.mondayMorning'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.mondayMorning = factory();
    }
}(this, function() {
    return [
        '#CEBEF7',
        '#000066',
        '#DBCFFA',
        '#160050',
        '#DCDCDE',
        '#F26011',
        '#592204',
        '#077D1F',
        '#91A0BD',
        '#084FD1',
        '#226AF0',
        '#F2740C',
        '#F2400A',
        '#AB2525',
        '#AAAAFF'
    ];
}));