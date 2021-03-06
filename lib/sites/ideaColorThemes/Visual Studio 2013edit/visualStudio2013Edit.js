(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.visualStudio2013Edit'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.visualStudio2013Edit = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#282828',
        '#1e1e1e',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#353535',
        '#569cd6',
        '#415f69',
        '#574300',
        '#3c3c3c',
        '#7177dc',
        '#3399ff',
        '#264f78',
        '#dcdcdc',
        '#434343',
        '#505050',
        '#4ec9b0',
        '#cc9393',
        '#c8c8c8',
        '#3a2323',
        '#57a64a',
        '#5394ec',
        '#d69d85',
        '#983498',
        '#ff6b68',
        '#b5cea8',
        '#808080',
        '#ffffff',
        '#9393cc',
        '#b8d7a3',
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
        '#4551ff',
        '#287bde',
        '#f49810',
        '#8ea9ff',
        '#2d4765',
        '#aeae80',
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#ff0000',
        '#589df6',
        '#2b2b2b',
        '#ff8647',
        '#ffffd7',
        '#e2ffe2',
        '#a9a9a9',
        '#d0d0ff',
        '#464467',
        '#a8c023',
        '#20999d',
        '#867f27',
        '#d1243b',
        '#dedede',
        '#714975',
        '#8c8c00'
    ];
}));