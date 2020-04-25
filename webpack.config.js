//const webpack = require('webpack');
const path = require('path');
//const nodeExternals = require('webpack-node-externals');
const clientConfig = {
    entry: {
        client: './ssr/client-hydrate.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};

/*
const serverConfig = {
    entry: './server.js',
    target: "node",
    devtool: "source-map",
    externals: [nodeExternals()],
    node: {
        __dirname: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false
        })
    ]
};
*/

module.exports = [clientConfig];