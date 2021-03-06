(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.relaxYourEyes'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.relaxYourEyes = factory();
    }
}(this, function() {
    return [
        '#FFBCF2',
        '#000066',
        '#aaccff',
        '#666666',
        '#FFFFFF',
        '#000000',
        '#B186FF',
        '#EFEFEF',
        '#ab2525',
        '#7F0055',
        '#333333',
        '#3F7F5F',
        '#395DA1',
        '#7F9FBF',
        '#FF8000',
        '#170591',
        '#3E7EFF',
        '#AAAAFF',
        '#566874',
        '#05314d'
    ];
}));