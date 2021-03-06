(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.vosthinLjubicanstvena'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.vosthinLjubicanstvena = factory();
    }
}(this, function() {
    return [
        '#ffffff',
        '#9b9b9b',
        '#b9b900',
        '#917600',
        '#808080',
        '#ff3b17',
        '#ff3990',
        '#660e7a',
        '#3d3d3d',
        '#ffcccc',
        '#3583ca',
        '#dd510b',
        '#6c2989',
        '#a36200',
        '#444444',
        '#54aae3'
    ];
}));