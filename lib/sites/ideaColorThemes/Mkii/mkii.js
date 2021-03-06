(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.mkii'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.mkii = factory();
    }
}(this, function() {
    return [
        '#0000FF',
        '#FFFFFF',
        '#000000',
        '#2B91AF',
        '#CCCCCC',
        '#006080',
        '#00D0D0',
        '#DC78DC',
        '#FFFF00',
        '#D0D0D0',
        '#00E000',
        '#CCDF32',
        '#D9E577',
        '#BFA4A4',
        '#EFC090',
        '#79ABFF',
        '#BED6FF',
        '#D197D9',
        '#FF8080'
    ];
}));