# all-colors

A collection of color palettes in JavaScript (RequireJS, CommonJS, and global) array and .txt format

## Usage
### Global
Create a script tag for each color palette that you want to use:

    <script src="bower_components/all-colors/lib/sites/ideaColorThemes/Tau Ceti/tauCeti.js"></script>
    <script>
        console.log(window.allColors.ideaColorThemes.tauCeti); //[ '#295622', '#bbbbbb', '#333333', ... ]
    </script>

Array(s) of colors will be created in the `window.allColors.<site name>.<palette name>` namespace.

### CommonJS

    var colors = require('all-colors');
    
    console.log(colors.ideaColorThemes.tauCeti); //[ '#295622', '#bbbbbb', '#333333', ... ]

Every color palette array from every site will be created in the `colors.<site name>.<palette name>` namespace.

### RequireJS

    define(['all-colors'], function(colors) {
        console.log(colors.ideaColorThemes.tauCeti); //[ '#295622', '#bbbbbb', '#333333', ... ]
    });

Every color palette array from every site will be created in the `colors.<site name>.<palette name>` namespace.

# Installation
### Npm
```
npm install all-colors --save
```
### Bower
```
bower install all-colors --save
```