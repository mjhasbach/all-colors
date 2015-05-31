(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.monokaiBlueHiDPI'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.monokaiBlueHiDPI = factory();
    }
}(this, function() {
    return [
        '#2f632f',
        '#f8f8f0',
        '#414a4d',
        '#272822',
        '#293134',
        '#455053',
        '#f8f8f2',
        '#1f4a64',
        '#687679',
        '#49483e',
        '#3b3a32',
        '#f92672',
        '#743d3d',
        '#757575',
        '#ae81ff',
        '#e6db74',
        '#75715e',
        '#a6e22e',
        '#66d9ef',
        '#fd971f',
        '#63e9f8',
        '#41e3f6',
        '#555555',
        '#ffb3b3',
        '#a7a7a7',
        '#b8e85e',
        '#a3e131',
        '#9376d0',
        '#8666ca',
        '#ffffff',
        '#ff1f1f',
        '#f10000',
        '#e4e4ff',
        '#6ae96a',
        '#e8e59c',
        '#dedb74',
        '#68e868',
        '#e3e3ff',
        '#fda5ff',
        '#71d7d7',
        '#ffc2c2',
        '#c3c3c3',
        '#f0f0f0',
        '#c0c0c0',
        '#763f34',
        '#ff6647',
        '#5b5b5b',
        '#747474',
        '#465983',
        '#30322b',
        '#ff6767',
        '#ff0000',
        '#101',
        '#c7c7ff',
        '#3c3d3c',
        '#101010',
        '#161717',
        '#aa4e00',
        '#f49810',
        '#3c3c57',
        '#ccccff',
        '#333434',
        '#ffffcc',
        '#273627',
        '#223f22',
        '#80807f',
        '#423535',
        '#979748',
        '#64a2a2',
        '#d0ffd0',
        '#ffcccc',
        '#ffa500',
        '#3a6da0',
        '#48485f',
        '#4d5d3d',
        '#4f4f82',
        '#532b2e',
        '#3a3a3a',
        '#425f44',
        '#a9b7c6',
        '#7f0000',
        '#5f5f00',
        '#583535',
        '#4a3f10',
        '#ffff00',
        '#472c47',
        '#ffcdff',
        '#623062'
    ];
}));