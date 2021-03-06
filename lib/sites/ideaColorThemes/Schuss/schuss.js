(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.schuss'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.schuss = factory();
    }
}(this, function() {
    return [
        '#f4fdff',
        '#FFFFFF',
        '#fff7cd',
        '#999999',
        '#430400',
        '#CC6633',
        '#ab2525',
        '#606060',
        '#585545',
        '#d0321f',
        '#5f97a9',
        '#000f6a',
        '#d7d3cc',
        '#d5d9e5',
        '#05314d',
        '#CC9393',
        '#d07fcd',
        '#464646',
        '#ae25ab',
        '#2b6488',
        '#4f6d8f',
        '#797a8a',
        '#ca3349',
        '#808080',
        '#566874'
    ];
}));