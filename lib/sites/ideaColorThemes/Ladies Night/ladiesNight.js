(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.ladiesNight'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.ladiesNight = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#2a3b3c',
        '#293134',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#802947',
        '#81969a',
        '#2f393c',
        '#415f69',
        '#574300',
        '#323232',
        '#e0e2e4',
        '#804000',
        '#622742',
        '#505050',
        '#678cb1',
        '#a082bd',
        '#3a2323',
        '#7d8c93',
        '#5394ec',
        '#ec7600',
        '#983498',
        '#ff6b68',
        '#ffcd22',
        '#93c763',
        '#808080',
        '#e8e2b7',
        '#e78698',
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
        '#173e4a',
        '#7499a3',
        '#616161',
        '#aeae80',
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#ff0000',
        '#589df6',
        '#2b2b2b',
        '#ff8647',
        '#ffffff',
        '#943d65',
        '#95c5c6',
        '#d0d0ff',
        '#a8c023',
        '#867f27',
        '#d1243b',
        '#c2c25a'
    ];
}));