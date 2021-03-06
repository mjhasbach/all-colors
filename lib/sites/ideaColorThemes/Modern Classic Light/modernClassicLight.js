(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.modernClassicLight'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.modernClassicLight = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#8b999f',
        '#eaeaea',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#f8f8f8',
        '#dbdbdb',
        '#343434',
        '#a5a5a5',
        '#b7e0b7',
        '#c6c68e',
        '#574300',
        '#323232',
        '#214283',
        '#505050',
        '#ff0000',
        '#bc3f3c',
        '#3a2323',
        '#769aa5',
        '#536c46',
        '#589df6',
        '#cc7832',
        '#ab51ba',
        '#c93b48',
        '#6a8759',
        '#4646f1',
        '#808080',
        '#fbc9c9',
        '#8f5247',
        '#656e76',
        '#447152',
        '#c3d3e4',
        '#9373a5',
        '#2d6099',
        '#287bde',
        '#aeae80',
        '#5f5f5f',
        '#715353',
        '#ba7900',
        '#908b25',
        '#c4b3a3',
        '#80b000',
        '#cdbcac',
        '#219598',
        '#532b2e',
        '#3a3a3a',
        '#425f44',
        '#a9b7c6',
        '#c7c8f5',
        '#867f27',
        '#d1243b',
        '#ffffff',
        '#c55450',
        '#e8bf6a'
    ];
}));