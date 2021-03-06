(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.vividchalk'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.vividchalk = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#222220',
        '#191919',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#414c3b',
        '#666666',
        '#415f69',
        '#574300',
        '#323232',
        '#ffffff',
        '#505050',
        '#9cf828',
        '#800080',
        '#3a2323',
        '#8c3fc8',
        '#5394ec',
        '#477488',
        '#983498',
        '#ff6b68',
        '#8146a2',
        '#ec691e',
        '#cdb1ad',
        '#808080',
        '#80ff00',
        '#f7c527',
        '#f1c438',
        '#3c758d',
        '#357a8f',
        '#87f025',
        '#66ff00',
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
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#ff0000',
        '#ff8647',
        '#a8c023',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00'
    ];
}));