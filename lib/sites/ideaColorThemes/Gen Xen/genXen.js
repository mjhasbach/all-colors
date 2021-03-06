(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.genXen'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.genXen = factory();
    }
}(this, function() {
    return [
        '#ff251e',
        '#202020',
        '#1b1c15',
        '#343434',
        '#666666',
        '#101010',
        '#282828',
        '#c5c5c5',
        '#958a8a',
        '#3c3f41',
        '#151515',
        '#808000',
        '#a0d953',
        '#808080',
        '#ffc8c8',
        '#5c5cff',
        '#555555',
        '#7f0000',
        '#aaaaaa',
        '#ff00ff',
        '#cd00cd',
        '#ff0000',
        '#cd0000',
        '#ffffff',
        '#eaea00',
        '#cdcd00',
        '#ffcccc',
        '#660e7a',
        '#660000',
        '#b729d9',
        '#4aa3ff',
        '#d9b1a3',
        '#878e99',
        '#446cff',
        '#a8adad',
        '#3d3d3d',
        '#f4dc6e',
        '#2e6eff',
        '#ff8019',
        '#7b8f88',
        '#c3a79a',
        '#ee4351',
        '#77daff',
        '#999999',
        '#d19a48',
        '#84af19',
        '#404040',
        '#f0f0f0',
        '#ffded8',
        '#ffc8bd',
        '#d6d6d6',
        '#cbcbcb',
        '#387ee7',
        '#c8f2c8',
        '#baeeba',
        '#cad9fa',
        '#bccff9',
        '#dae7c0',
        '#f6ebbc',
        '#f49810',
        '#272727',
        '#ffa500',
        '#56ff00',
        '#171717',
        '#e3fcff',
        '#e8bf6a',
        '#800080',
        '#17180c',
        '#20999d',
        '#ffff00',
        '#373737',
        '#a5c261'
    ];
}));