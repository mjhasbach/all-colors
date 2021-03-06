(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.cylox'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.cylox = factory();
    }
}(this, function() {
    return [
        '#dc322f',
        '#49a33f',
        '#778de0',
        '#56c7e9',
        '#658ae9',
        '#586e75',
        '#fdf6e3',
        '#839496',
        '#20253d',
        '#859900',
        '#b58800',
        '#6c6fc4',
        '#268bd2',
        '#2aa198',
        '#b48900',
        '#b58900',
        '#93a1a1',
        '#38492e',
        '#cb4b16',
        '#248044',
        '#6a4ab9',
        '#cc7832',
        '#808080',
        '#e2ffe2',
        '#236b96',
        '#595996',
        '#ffcccc',
        '#314780',
        '#4f7696',
        '#bc8a26',
        '#c3c3c3',
        '#f0f0f0',
        '#800b09',
        '#4d1d08',
        '#424d00',
        '#99ff99',
        '#99ccff',
        '#5773bd',
        '#db312e',
        '#ffffff',
        '#2688d1',
        '#d33682',
        '#83ba0d',
        '#657b83',
        '#ccccff',
        '#6c71c4',
        '#459029',
        '#d43780',
        '#47ada8',
        '#ccffcc',
        '#ffffcc',
        '#ff0000',
        '#555555',
        '#ffa500',
        '#207515',
        '#596b00',
        '#418a8f',
        '#b97300',
        '#af250b',
        '#e66262',
        '#a6a45f',
        '#8447b9',
        '#ad3e11',
        '#545ab9',
        '#b0a51a',
        '#cc311e',
        '#849900',
        '#50861a',
        '#e8bf6a',
        '#297bde',
        '#b58916',
        '#a5a362',
        '#ede6d3',
        '#a39e91',
        '#fc300c',
        '#698b00',
        '#ffcce5',
        '#97b2bb',
        '#20be6d',
        '#92a1a1',
        '#8eadb6'
    ];
}));