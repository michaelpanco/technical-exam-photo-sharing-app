const path = require('path');
const webpack = require('webpack')

var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: false,
    entry: {
        index: './app/index.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, '/'),
        },
        port: 9000,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        fallback: {
          util: require.resolve("util/")
        }
    },
    optimization: {
        sideEffects: true,
        usedExports: true,
    },
    plugins: [
        new copyWebpackPlugin({
     
            patterns: [
                { from: 'index.html' },
                { from: 'assets', to: 'assets'  },
            ]
        }),
        new webpack.ProvidePlugin({
            process: 'process',
        }),
    ]
};