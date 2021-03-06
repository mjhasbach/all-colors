(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.oceanSunset'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.oceanSunset = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#343d46',
        '#2b303b',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#33353b',
        '#4f5b66',
        '#7b7c7e',
        '#415f69',
        '#574300',
        '#323232',
        '#eff1f5',
        '#505050',
        '#add6bf',
        '#979dba',
        '#d3b8d4',
        '#b4cdd9',
        '#bf616a',
        '#3a2323',
        '#65737e',
        '#adc9d8',
        '#5394ec',
        '#a3be8c',
        '#983498',
        '#ff6b68',
        '#d08770',
        '#b48ead',
        '#808080',
        '#8fa1b3',
        '#ebcb8b',
        '#c0c5ce',
        '#928995',
        '#9a929d',
        '#bbb1aa',
        '#62aed2',
        '#ab7967',
        '#d9c0a5',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d',
        '#8594a7',
        '#5e5339',
        '#bce5eb',
        '#bc3f3c',
        '#2d6099',
        '#287bde',
        '#f49810',
        '#aeae80',
        '#d9b79b',
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#ff0000',
        '#c7c0b5',
        '#589df6',
        '#2b2b2b',
        '#ff8647',
        '#b3a493',
        '#e0a59f',
        '#d0d1d0',
        '#ddb5a5',
        '#d0d0ff',
        '#ffffff',
        '#aaaaaa',
        '#a8c023',
        '#d39a6a',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00'
    ];
}));