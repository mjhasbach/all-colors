(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.oblivion'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.oblivion = factory();
    }
}(this, function() {
    return [
        '#000000',
        '#D0D0D0',
        '#2A2A2A',
        '#1E1E1E',
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
        '#D8D8D8',
        '#D25252',
        '#FFFFFF',
        '#FFC600',
        '#7FB347',
        '#C7DD0C',
        '#CCDF32',
        '#D9E577',
        '#BFA4A4',
        '#EFC090',
        '#79ABFF',
        '#BED6FF',
        '#D197D9',
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