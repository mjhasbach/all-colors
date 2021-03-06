(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.monokaiFb'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.monokaiFb = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#bbbbbb',
        '#272822',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#222218',
        '#999999',
        '#415f69',
        '#574300',
        '#323232',
        '#404040',
        '#49483e',
        '#505050',
        '#52e3f6',
        '#d9e577',
        '#ff0000',
        '#3a2323',
        '#75715e',
        '#5394ec',
        '#e6db74',
        '#983498',
        '#f8f8f2',
        '#ff6b68',
        '#ae81ff',
        '#f92672',
        '#fd971f',
        '#808080',
        '#f9faf4',
        '#a6e22e',
        '#ffffff',
        '#a7ec21',
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
        '#aeae80',
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#589df6',
        '#2b2b2b',
        '#dab705',
        '#dc6321',
        '#ffffd7',
        '#e2ffe2',
        '#a9a9a9',
        '#d0d0ff',
        '#ffe792',
        '#a8c023',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00'
    ];
}));