(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.sunshine'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.sunshine = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#656565',
        '#242424',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#898941',
        '#415f69',
        '#574300',
        '#323232',
        '#505050',
        '#cae682',
        '#f08080',
        '#ffffff',
        '#3a2323',
        '#99968b',
        '#5394ec',
        '#95e454',
        '#983498',
        '#f6f3e8',
        '#ff6b68',
        '#8ac6f2',
        '#f3f6ee',
        '#53dccd',
        '#b3b5af',
        '#a7a7d1',
        '#d4c4a9',
        '#808080',
        '#93a2cc',
        '#c4c4b7',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d',
        '#5e5339',
        '#bc3f3c',
        '#2d6099',
        '#287bde',
        '#f49810',
        '#616161',
        '#aeae80',
        '#ff8647',
        '#464467',
        '#a8c023',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00',
        '#948567',
        '#ff73e6',
        '#ff66a8',
        '#4b880a',
        '#9c9c9c',
        '#9dff48',
        '#6dbc32',
        '#fcffb6'
    ];
}));