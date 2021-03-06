(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.darkFlashBuilder'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.darkFlashBuilder = factory();
    }
}(this, function() {
    return [
        '#111111',
        '#DDDDCC',
        '#2B2B2B',
        '#8A8A8A',
        '#3F3F3F',
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
        '#616161',
        '#38566F',
        '#D24F4F',
        '#DFC47D',
        '#CC9393',
        '#EDDD3D',
        '#F0EFD0',
        '#F2F2DF',
        '#7F9F7F',
        '#659F65',
        '#9393CC',
        '#A893CC',
        '#BFA4A4',
        '#EFC090',
        '#6699CC',
        '#D197D9',
        '#808080',
        '#D25B5B',
        '#EFEFAF',
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