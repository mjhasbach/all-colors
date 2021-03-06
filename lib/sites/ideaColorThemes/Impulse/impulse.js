(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.impulse'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.impulse = factory();
    }
}(this, function() {
    return [
        '#f2f2f7',
        '#2b91af',
        '#add6ff',
        '#2c91af',
        '#808000',
        '#325a8c',
        '#ffcccc',
        '#808080',
        '#ffc8c8',
        '#595959',
        '#af0e0e',
        '#bf0bb1',
        '#ffffff',
        '#e7c60a',
        '#edaf1c',
        '#4f9fcf',
        '#cc6a09',
        '#660e7a',
        '#660000',
        '#4a72a5',
        '#3d3d3d',
        '#e2ffe2',
        '#f6f6f6',
        '#c3c3c3',
        '#f0f0f0',
        '#404040',
        '#ffded8',
        '#ffc8bd',
        '#d6d6d6',
        '#cbcbcb',
        '#387ee7',
        '#c8f2c8',
        '#baeeba',
        '#cad9fa',
        '#bccff9',
        '#dae7c0',
        '#f5f7f0',
        '#ff0000',
        '#f6ebbc',
        '#666666',
        '#ecfaeb',
        '#f49810',
        '#c37522',
        '#297bde',
        '#e4e4ff',
        '#ccccff',
        '#cccccc',
        '#ffffcc',
        '#f2faff',
        '#ccffcc',
        '#555555',
        '#80a000',
        '#ffff80',
        '#e3fcff',
        '#d9d9f0',
        '#edfced',
        '#cadaba',
        '#800080',
        '#7f0000',
        '#333333',
        '#ffff00',
        '#ffdcdc',
        '#ffe4ff',
        '#ffcdff'
    ];
}));