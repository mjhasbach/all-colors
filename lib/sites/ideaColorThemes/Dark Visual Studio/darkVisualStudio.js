(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.darkVisualStudio'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.darkVisualStudio = factory();
    }
}(this, function() {
    return [
        '#364656',
        '#FFFFFF',
        '#505050',
        '#C0C0C0',
        '#1E1E1E',
        '#bbbbbb',
        '#323232',
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
        '#E2E2E2',
        '#616161',
        '#948567',
        '#464467',
        '#8DCBE2',
        '#CC9393',
        '#EAB882',
        '#F0EFD0',
        '#7F9F7F',
        '#73879B',
        '#B3B5AF',
        '#9393CC',
        '#53DCCD',
        '#D4C4A9',
        '#DFBE95',
        '#CAE682',
        '#808080',
        '#B3B784',
        '#C4C4B7',
        '#93A2CC',
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