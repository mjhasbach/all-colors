(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.solarizedDark'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.solarizedDark = factory();
    }
}(this, function() {
    return [
        '#073642',
        '#93A1A1',
        '#002B36',
        '#657B83',
        '#bbbbbb',
        '#323232',
        '#505050',
        '#295622',
        '#415f69',
        '#574300',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#839496',
        '#E0E2E4',
        '#B58900',
        '#2AA198',
        '#DC322F',
        '#586E75',
        '#7D8C93',
        '#A082BD',
        '#268BD2',
        '#678CB1',
        '#CB4B16',
        '#287bde',
        '#ff8647',
        '#d1243b',
        '#a8c023',
        '#bc3f3c',
        '#808080',
        '#52503a',
        '#8c8c00',
        '#aeae80',
        '#f49810',
        '#5e5339',
        '#867f27',
        '#ff6b68',
        '#5394ec',
        '#983498',
        '#006969',
        '#3a2323',
        '#2d6099',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d'
    ];
}));