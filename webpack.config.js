
const webpack = require('webpack');
const PATHS = require('./webpack-paths.js');
const loaders = require('./webpack-loaders.js');
module.exports = {

    entry: PATHS.P.src,
    output: {
        path: PATHS.P.dest,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            loaders.babel,
            loaders.style
        ]
    }
}