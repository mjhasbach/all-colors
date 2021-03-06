(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.pdestal'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.pdestal = factory();
    }
}(this, function() {
    return [
        '#cbd3df',
        '#2e363f',
        '#22272f',
        '#8ea976',
        '#8097b1',
        '#21262e',
        '#484b58',
        '#f8f8f8',
        '#4f5b66',
        '#6e3b3b',
        '#743d3d',
        '#fbde2d',
        '#aeaeae',
        '#d8fa3c',
        '#61ce3c',
        '#ff6400',
        '#a9b7c6',
        '#c7c7ff',
        '#ffb3b3',
        '#a7a7a7',
        '#68e868',
        '#ff2eff',
        '#ffffff',
        '#ff6767',
        '#e4e4ff',
        '#6ae96a',
        '#754200',
        '#7da19f',
        '#8da6ce',
        '#b04a55',
        '#b76e5b',
        '#abb2bc',
        '#c26e5b',
        '#9e738c',
        '#481515',
        '#e3e3ff',
        '#fda5ff',
        '#71d7d7',
        '#ffc2c2',
        '#505e69',
        '#a17897',
        '#e1b674',
        '#c0c5ce',
        '#ffcccc',
        '#7f90aa',
        '#cc7832',
        '#97ae74',
        '#c3c3c3',
        '#c0c0c0',
        '#763f34',
        '#ff6647',
        '#5b5b5b',
        '#747474',
        '#2f632f',
        '#99ff99',
        '#465983',
        '#99ccff',
        '#ff0000',
        '#101',
        '#959595',
        '#3c3d3c',
        '#1c1f26',
        '#aa4e00',
        '#f49810',
        '#ccccff',
        '#333434',
        '#ffffcc',
        '#223f22',
        '#80807f',
        '#423535',
        '#778c9e',
        '#ccffcc',
        '#555555',
        '#ffa500',
        '#3a6da0',
        '#e8bf6a',
        '#48485f',
        '#273627',
        '#4d5d3d',
        '#f9d47b',
        '#9d1e15',
        '#532b2e',
        '#3a3a3a',
        '#425f44',
        '#7f0000',
        '#583535',
        '#ffff00'
    ];
}));