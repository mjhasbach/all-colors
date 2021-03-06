(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.eclectideMonokai'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.eclectideMonokai = factory();
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
        '#373737',
        '#999999',
        '#5b5a4e',
        '#415f69',
        '#574300',
        '#323232',
        '#505050',
        '#cc9900',
        '#214283',
        '#d9e577',
        '#ff0000',
        '#c57633',
        '#ae81ff',
        '#3a2323',
        '#74715e',
        '#5394ec',
        '#e6da74',
        '#983498',
        '#ffffff',
        '#ff6b68',
        '#a7e22e',
        '#589df6',
        '#f92772',
        '#fe9720',
        '#808080',
        '#f9faf4',
        '#66d9ee',
        '#cfbfad',
        '#f6f6f6',
        '#a7ec21',
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
        '#d62220',
        '#2d6099',
        '#8c8c8c',
        '#3a3a3a',
        '#287bde',
        '#c27310',
        '#cc7110',
        '#e5e7e8',
        '#96d22f',
        '#ccffcc',
        '#ffcccc',
        '#ffffcc',
        '#2b2b2b',
        '#595959',
        '#181818',
        '#e4e4e4',
        '#532b2e',
        '#425f44',
        '#a9b7c6',
        '#d0d0ff',
        '#fef629',
        '#867f27',
        '#d1243b',
        '#52503a'
    ];
}));