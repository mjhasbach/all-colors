(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.darkVoid'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.darkVoid = factory();
    }
}(this, function() {
    return [
        '#F0F0F0',
        '#000000',
        '#2A2A2A',
        '#4F4F4F',
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
        '#FFFFFF',
        '#2F2F2F',
        '#A96A3B',
        '#FF0000',
        '#39B7FF',
        '#FFD739',
        '#0FFFFF',
        '#D8F848',
        '#08D8D8',
        '#93A486',
        '#86A497',
        '#67A09A',
        '#67A087',
        '#BFA4A4',
        '#EAAC70',
        '#EFC090',
        '#79ABFF',
        '#0050F0',
        '#F000F0',
        '#D197D9',
        '#70A070',
        '#52D252',
        '#9ADAEA',
        '#BED6FF',
        '#287bde',
        '#ff8647',
        '#d1243b',
        '#a8c023',
        '#bc3f3c',
        '#808080',
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