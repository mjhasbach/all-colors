(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.railscastsGreyComments'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.railscastsGreyComments = factory();
    }
}(this, function() {
    return [
        '#5A647E',
        '#FFFFFF',
        '#333435',
        '#2B2B2B',
        '#bbbbbb',
        '#323232',
        '#505050',
        '#295622',
        '#415f69',
        '#574300',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#E6E1DC',
        '#616161',
        '#948567',
        '#CC7833',
        '#A5C261',
        '#F0EFD0',
        '#666666',
        '#BC9458',
        '#DA4939',
        '#FFC66D',
        '#808080',
        '#6D9CBE',
        '#C4C4B7',
        '#287bde',
        '#ff8647',
        '#d1243b',
        '#a8c023',
        '#bc3f3c',
        '#52503a',
        '#8c8c00',
        '#aeae80',
        '#f49810',
        '#5e5339',
        '#867f27',
        '#ff6b68',
        '#5394ec',
        '#983498',
        '#006969',
        '#3a2323',
        '#2d6099',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d'
    ];
}));