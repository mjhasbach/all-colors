(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.visualStudioTheme'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.visualStudioTheme = factory();
    }
}(this, function() {
    return [
        '#ADD6FF',
        '#000000',
        '#EEEEEE',
        '#FFFFFF',
        '#E2E6D6',
        '#0000FF',
        '#A31515',
        '#008000',
        '#2C91AF'
    ];
}));