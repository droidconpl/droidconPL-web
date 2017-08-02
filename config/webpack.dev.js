const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:3000/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});