(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.blue'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.blue = factory();
    }
}(this, function() {
    return [
        '#ffffff',
        '#252a33',
        '#444b49',
        '#adb1aa',
        '#c6cac3',
        '#264493',
        '#737373',
        '#484b58',
        '#6e3b3b',
        '#743d3d',
        '#fbde2d',
        '#aeaeae',
        '#d8fa3c',
        '#61ce3c',
        '#ff6400',
        '#c7c7ff',
        '#ffb3b3',
        '#a7a7a7',
        '#68e868',
        '#ff2eff',
        '#ff6767',
        '#e4e4ff',
        '#6ae96a',
        '#754200',
        '#5ba1cf',
        '#cccccc',
        '#481515',
        '#e3e3ff',
        '#fda5ff',
        '#71d7d7',
        '#ffc2c2',
        '#7f90aa',
        '#e3e300',
        '#35a925',
        '#c0c0c0',
        '#763f34',
        '#ff6647',
        '#5b5b5b',
        '#747474',
        '#2f632f',
        '#99ff99',
        '#465983',
        '#99ccff',
        '#8da6ce',
        '#4ca7c4',
        '#ff0000',
        '#101',
        '#aa4e00',
        '#f49810',
        '#74807f',
        '#ffff59',
        '#ccccff',
        '#333434',
        '#ffffcc',
        '#223f22',
        '#80807f',
        '#423535',
        '#808080',
        '#b3b3b3',
        '#8225cd',
        '#fcfffc',
        '#f2c0ea',
        '#48485f',
        '#273627',
        '#4d5d3d',
        '#f8f8f8',
        '#9d1e15',
        '#583535',
        '#818183',
        '#ffff00',
        '#ffcdff'
    ];
}));