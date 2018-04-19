const path = require('path');

const BundleTracker = require('webpack-bundle-tracker');
const dependencies = require('../package.json').dependencies;

const constants = require('../constants');


const baseConfig = {
    // the current file is inside the webpack dir, but we need to go
    // up (..) once, in order to get to the front_end dir and then to the
    // src dir (where the react modules live)
    context: path.resolve(__dirname, '..', 'src'),
    entry: {
        // declare the entry point where all starts
        // (relative to context above, which means src/entry.js)
        {{ project_name }}: './entryReactPoint.js',  // rename that to the actual entry point
        // declare the external libs that will be bundled into a separate
        // file (good for caching)
        vendors: Object.keys(dependencies),
    },
    output: {
        // dir name to save the bundles.
        // The number of the js bundles that'll be created are equal to
        // the number of properties of the "entry" object above.
        // In this scenario, two bundles will be created (bookingCalendar and
        // vendors).
        path: constants.staticFilesJsDir,
        // filename of each bundle.
        // [name]: the name of each key of the "entry" object above ("vendors" etc.)
        // [chunkhash]: the hash of each bundle's content.
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new BundleTracker({path: constants.staticFilesJsDir, filename: 'webpack-stats.json'}),
    ],
    resolve: {}
};


module.exports = baseConfig;
