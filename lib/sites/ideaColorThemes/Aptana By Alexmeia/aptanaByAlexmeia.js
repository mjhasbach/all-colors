(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.aptanaByAlexmeia'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.aptanaByAlexmeia = factory();
    }
}(this, function() {
    return [
        '#CCC',
        '#000',
        '#EFEFE0',
        '#AAA',
        '#FEFEFE',
        '#474747',
        '#616161',
        '#948567',
        '#464467',
        '#FFFFFF',
        '#5FA6BF',
        '#CC3300',
        '#FF931F',
        '#639B9F',
        '#8FA8BF',
        '#B3B5AF',
        '#CC9393',
        '#9393CC',
        '#53DCCD',
        '#AF9362',
        '#9ECF19',
        '#B3B784',
        '#9F9F95',
        '#93A2CC'
    ];
}));