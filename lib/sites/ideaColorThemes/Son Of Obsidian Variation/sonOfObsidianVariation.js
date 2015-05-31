(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.sonOfObsidianVariation'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.sonOfObsidianVariation = factory();
    }
}(this, function() {
    return [
        '#85b28c',
        '#9ea6aa',
        '#252d2e',
        '#2b3235',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#6876aa',
        '#6897bb',
        '#d1675a',
        '#202628',
        '#394047',
        '#263b39',
        '#89a9ce',
        '#5c5c42',
        '#c1c43b',
        '#445258',
        '#a5a69e',
        '#d9d9d9',
        '#804000',
        '#a5a5a5',
        '#7a90a0',
        '#f2e9cf',
        '#a082bd',
        '#4a759d',
        '#ff143f',
        '#ffffff',
        '#802936',
        '#f5726a',
        '#797979',
        '#93c763',
        '#ba95d9',
        '#62a9ee',
        '#ff383f',
        '#a47565',
        '#bd9ada',
        '#8cbbad',
        '#de9275',
        '#758a90',
        '#808080',
        '#e2c62f',
        '#f49829',
        '#e0df3b',
        '#53749d',
        '#e8e2b7',
        '#7b8f73',
        '#f5f5f5',
        '#7a67ab',
        '#de5f00',
        '#5bba4b',
        '#525f60',
        '#d9b700',
        '#696969',
        '#ffb74a',
        '#d94518',
        '#ff0500',
        '#a40010',
        '#475d45',
        '#385570',
        '#43698d',
        '#3d3d3d',
        '#f8f8f8',
        '#878986',
        '#b92e2b',
        '#ff0000',
        '#4c7597',
        '#6a6b6b',
        '#6266ff',
        '#f49810',
        '#82c8ef',
        '#b1ebff',
        '#69727a',
        '#77c9b6',
        '#ffffcc',
        '#4c5356',
        '#9876aa',
        '#ccffcc',
        '#ffcccc',
        '#939393',
        '#f4a21f',
        '#589df6',
        '#2b2b2b',
        '#505050',
        '#979797',
        '#d39745',
        '#adbd9d',
        '#282828',
        '#f4eb8b',
        '#d0d0ff',
        '#3c7cde',
        '#1b1f21',
        '#91c794',
        '#7d8c93',
        '#b2b223',
        '#f9f9f9',
        '#c27455',
        '#bbbbbb',
        '#cdb452',
        '#76534e',
        '#d4a4d4',
        '#c5add4',
        '#e74e4e',
        '#7db94a'
    ];
}));