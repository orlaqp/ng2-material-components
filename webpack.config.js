const webpack = require('webpack');
const path = require('path');
const name = require('./package.json')
    .name;

const config = {
    cache: false,
    entry: path.resolve(__dirname, 'src', name + '.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: name + '.bundle.js'
    },
    devtool: 'sourcemap',
    resolve: {
        extensions: ['', '.ts', '.js'],
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts']
        }, {
            test: /\.jade$/,
            loaders: ['pug']
        }, {
            test: /\.pug$/,
            loaders: ['pug']
        }, {
            test: /\.html$/,
            loaders: ['raw']
        }, {
            test: /\.md$/,
            loader: 'html?minimize=false!markdown'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },
    ts: {
        transpileOnly: true,
        compilerOptions: {
            declaration: false,
        },
    },

};

module.exports = config;
