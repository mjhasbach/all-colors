(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.talskiDark'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.talskiDark = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#373737',
        '#404040',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#ede0ce',
        '#505050',
        '#415f69',
        '#574300',
        '#323232',
        '#555555',
        '#66f1b9',
        '#66f1b8',
        '#ffffff',
        '#3a2323',
        '#7f9f7f',
        '#5394ec',
        '#cc9393',
        '#983498',
        '#f6f3e8',
        '#ff6b68',
        '#8acccf',
        '#efefaf',
        '#737369',
        '#f19a11',
        '#98e23f',
        '#b3b784',
        '#dfbe95',
        '#cae682',
        '#eb3d43',
        '#93a2cc',
        '#c4c4b7',
        '#ead44c',
        '#f25655',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d',
        '#5e5339',
        '#2d6099',
        '#318ec3',
        '#f49810',
        '#32b2eb',
        '#616161',
        '#ebd44c',
        '#8ef48d',
        '#ffcccc',
        '#ffffcc',
        '#ff0000',
        '#d4c4a9',
        '#589df6',
        '#2b2b2b',
        '#ed8e44',
        '#c4c4b5',
        '#808080',
        '#646464',
        '#d0d0ff',
        '#2d2d2d',
        '#8262f9',
        '#5f6055'
    ];
}));