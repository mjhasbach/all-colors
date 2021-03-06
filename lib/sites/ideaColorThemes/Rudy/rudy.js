(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var lastName = root,
            namespace = 'allColors.ideaColorThemes.rudy'.split('.');

        for (var i = 0; i < namespace.length; i++) {
            if (lastName[namespace[i]] === undefined) {
                lastName = lastName[namespace[i]] = {};
            }
        }

        root.allColors.ideaColorThemes.rudy = factory();
    }
}(this, function() {
    return [
        '#295622',
        '#8b999f',
        '#bbbbbb',
        '#323232',
        '#2b2b2b',
        '#629755',
        '#6c6c6c',
        '#848504',
        '#d5756c',
        '#9876aa',
        '#6897bb',
        '#d1675a',
        '#313335',
        '#373737',
        '#69ffc2',
        '#4d4d4d',
        '#415f69',
        '#5c5c42',
        '#574300',
        '#505050',
        '#787878',
        '#525252',
        '#555555',
        '#d0d0ff',
        '#bbb529',
        '#ff0000',
        '#3a2323',
        '#7eaef1',
        '#5394ec',
        '#6cdada',
        '#33cccc',
        '#ff6b68',
        '#999999',
        '#70ff70',
        '#ff99ff',
        '#ff70ff',
        '#3e3850',
        '#ff8785',
        '#ffff00',
        '#cdcd00',
        '#589df6',
        '#cc7832',
        '#ab51ba',
        '#c93b48',
        '#6a8759',
        '#4646f1',
        '#e98b55',
        '#769aa5',
        '#7588aa',
        '#e5e849',
        '#526d4a',
        '#77b767',
        '#39ccb0',
        '#8fccc5',
        '#a9b7c6',
        '#49aa62',
        '#b9dd48',
        '#32aa77',
        '#dcdcdc',
        '#450505',
        '#c3c3c3',
        '#45302b',
        '#8f5247',
        '#484a4a',
        '#656e76',
        '#294436',
        '#447152',
        '#385570',
        '#43698d',
        '#8a653b',
        '#5e5339',
        '#bc3f3c',
        '#2d6099',
        '#8c8c8c',
        '#3a3a3a',
        '#287bde',
        '#f49810',
        '#bababa',
        '#a5c261',
        '#6d9cbe',
        '#e8bf6a',
        '#89a9de',
        '#344134',
        '#5d8e48',
        '#b389c5',
        '#aeae80',
        '#364135',
        '#808080',
        '#485848',
        '#715353',
        '#80805a',
        '#ffef28',
        '#3b514d',
        '#58e1ff',
        '#536c46',
        '#80b000',
        '#9373a5',
        '#908b25',
        '#c4b3a3',
        '#cdbcac',
        '#c7c8f5',
        '#219598',
        '#155221',
        '#246e00',
        '#532b2e',
        '#425f44',
        '#ae8abe',
        '#181818',
        '#56ac48',
        '#a8c023',
        '#507874',
        '#867f27',
        '#d1243b',
        '#52503a',
        '#8c8c00',
        '#40332b',
        '#c55450'
    ];
}));