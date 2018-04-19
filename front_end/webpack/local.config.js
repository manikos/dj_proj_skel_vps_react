const webpack = require('webpack');

const merge = require('webpack-merge');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const constants = require('../constants');
const baseConfig = require('./base.config');

const host = 'localhost';
const port = 9000;


const localConfig = merge(baseConfig, {
    devtool: 'source-map',
    // When a resource is queried through http://localhost:9000/static/js/path/to/a/file.js
    // then the devServer (below)... +
    output: {
        publicPath: `http://${host}:${port}/static/js/`
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // visualization of output files size, with an interactive tree-map.
        // visit http://127.0.0.1:8888
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // put all entry.vendors modules inside a single file
            // named as vendors.8gd5f75f.js (the hash should not change
            // except when a new version of a module is used).
            name: 'vendors',
            filename: '[name].[hash:8].js',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // put manifest file inside its own file. Good for caching.
            name: 'manifest',
            filename: '[name].[hash:8].js',
        }),
        new webpack.NamedModulesPlugin(),
    ],
    // +... will search to the contentBase dir. In this case, the devServer
    // will search to constants.staticFilesJsDir/path/to/a/file.js
    devServer: {
        contentBase: constants.staticFilesJsDir,
        port: port,
        stats: 'errors-only',
    },
});

module.exports = localConfig;