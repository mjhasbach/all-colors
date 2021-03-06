(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.ciderTheme'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.ciderTheme = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#343434',
        '#242424',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#898941',
        '#656565',
        '#415f69',
        '#574300',
        '#323232',
        '#363636',
        '#111111',
        '#505050',
        '#cae682',
        '#5b5259',
        '#ffffff',
        '#3a2323',
        '#99968b',
        '#8a57f0',
        '#5394ec',
        '#95e454',
        '#983498',
        '#f6f3e8',
        '#ff6b68',
        '#f08080',
        '#8ac6f2',
        '#808080',
        '#f3f6ee',
        '#4592dc',
        '#b3b5af',
        '#a7a7d1',
        '#b5333b',
        '#823d2a',
        '#5988c8',
        '#6a589b',
        '#4ec674',
        '#53dccd',
        '#c4c4b7',
        '#6eac43',
        '#444444',
        '#c3c3c3',
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
        '#797979',
        '#2c1a3e',
        '#287bde',
        '#f49810',
        '#616161',
        '#aeae80',
        '#43c3a3',
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#ff0000',
        '#43a3c3',
        '#d4c4a9',
        '#ff8647',
        '#464467',
        '#a463f8',
        '#acc1ac',
        '#d1243b',
        '#8c8c00',
        '#948567'
    ];
}));