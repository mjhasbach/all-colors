(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.foggyDay'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.foggyDay = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#505050',
        '#101020',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#474747',
        '#cc9900',
        '#415f69',
        '#574300',
        '#ffffff',
        '#4b6eae',
        '#7d8c93',
        '#678cb1',
        '#808080',
        '#bcadad',
        '#ff8080',
        '#3a2323',
        '#5394ec',
        '#dc78dc',
        '#983498',
        '#d0d0d0',
        '#ff6b68',
        '#ffff00',
        '#589df6',
        '#93c763',
        '#8acccf',
        '#cc9393',
        '#bfa4a4',
        '#efc090',
        '#ccdf32',
        '#d9e577',
        '#bed6ff',
        '#79abff',
        '#d197d9',
        '#b3b784',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d',
        '#5e5339',
        '#e0e0e0',
        '#bc3f3c',
        '#2d6099',
        '#287bde',
        '#f49810',
        '#616161',
        '#aeae80',
        '#b3b5af',
        '#9393cc',
        '#f0efd0',
        '#d4c4a9',
        '#2b2b2b',
        '#ff8647',
        '#dfbe95',
        '#464467',
        '#93a2cc',
        '#b598bc',
        '#d0d0ff',
        '#a8c023',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00'
    ];
}));