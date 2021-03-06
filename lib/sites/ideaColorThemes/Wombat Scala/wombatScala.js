(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.wombatScala'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.wombatScala = factory();
    }
}(this, function() {
    return [
        '#898941',
        '#000000',
        '#656565',
        '#242424',
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
        '#f6f3e8',
        '#616161',
        '#948567',
        '#464467',
        '#FFFFFF',
        '#8ac6f2',
        '#95e454',
        '#f08080',
        '#f3f6ee',
        '#99968b',
        '#b3b5af',
        '#a7a7d1',
        '#53dccd',
        '#D4C4A9',
        '#CAE682',
        '#808080',
        '#cae682',
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