(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(<%= amd %>, factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(<%= cjs %>);
    } else {
        var lastName = root,
            namespace = '<%= namespace %>'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.<%= namespace %> = factory(<%= global %>);
    }
}(this, function(<%= param %>) {
    return <%= contents %>;
}));