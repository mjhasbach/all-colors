(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.darkKnight'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.darkKnight = factory();
    }
}(this, function() {
    return [
        '#fbf4ff',
        '#7266cc',
        '#ffffff',
        '#333333',
        '#202020',
        '#808080',
        '#ffd967',
        '#ffa235',
        '#ff0000',
        '#370707',
        '#a6a684',
        '#c1cfea',
        '#c40000',
        '#99ff00',
        '#99ccff',
        '#99ff99',
        '#660e7a',
        '#e20000',
        '#858ea8',
        '#88cdff',
        '#c3c3c3',
        '#3d0909',
        '#666666',
        '#747474',
        '#164716',
        '#1e1e45',
        '#3471ff',
        '#458383',
        '#7a7a2b',
        '#ff60fe',
        '#87e895',
        '#ff881d',
        '#c0cbe6',
        '#ff130e',
        '#c0c0c0',
        '#9c57ff',
        '#96a0bb',
        '#ccccff',
        '#9cfcaa',
        '#f7b891',
        '#474747',
        '#f6ff66',
        '#727b97',
        '#63667b',
        '#a5c25c',
        '#2dde6f',
        '#7d86a1',
        '#fcff3c',
        '#ff009c',
        '#aac26f',
        '#eddd3d',
        '#8aa6c1',
        '#9933cc',
        '#3adf3a',
        '#a0a9c4',
        '#7a88ff',
        '#bac5e0',
        '#b1bee4',
        '#ffcdcd',
        '#ffff66',
        '#ebebeb',
        '#ffcccc',
        '#ffcc33',
        '#ffccff',
        '#ccff66',
        '#ffe5aa',
        '#ffcc29',
        '#8642ff',
        '#ffff00',
        '#ffe4ff',
        '#ffcdff',
        '#c93018',
        '#71ff8b',
        '#aa14c7',
        '#dae9f6',
        '#e8d3d3'
    ];
}));