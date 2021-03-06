(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.netbeans70'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.netbeans70 = factory();
    }
}(this, function() {
    return [
        '#D7E1FF',
        '#000000',
        '#E8ECFF',
        '#3C3C3C',
        '#FFFFFF',
        '#E6E696',
        '#D8D8D8',
        '#0000E6',
        '#CD7D00',
        '#969696',
        '#006600',
        '#642300',
        '#990000'
    ];
}));