(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.jellybeanInspired'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.jellybeanInspired = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#1d354a',
        '#172939',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#8db0d3',
        '#415f69',
        '#574300',
        '#323232',
        '#89accb',
        '#505050',
        '#ffffff',
        '#dd8ee0',
        '#3a2323',
        '#3a8bda',
        '#5394ec',
        '#ffff80',
        '#983498',
        '#ff6b68',
        '#7bd827',
        '#e0a42d',
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
        '#3c5f7f',
        '#aeae80',
        '#ff8647',
        '#808080',
        '#991d31',
        '#888888',
        '#ffb64b',
        '#c5b0c8',
        '#c6b7fe',
        '#cacbb4',
        '#788d4e',
        '#3f4e25',
        '#e8e8d3',
        '#98ab4f',
        '#a694de',
        '#427394',
        '#facf7a',
        '#7b2223',
        '#cf6a4c',
        '#540c3e',
        '#8dbdd5',
        '#6295d7',
        '#729fbc',
        '#151515',
        '#3c6080',
        '#a8c023',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00'
    ];
}));