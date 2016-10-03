const webpack = require('webpack');
const path = require('path');
const dateFormat = require('dateformat');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const pkg = require('../package.json');

/**
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

const isProduction = ENV === 'demo:build';

const config = {
        cache: false,
        entry: path.resolve(__dirname, 'main.ts'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.ts', '.js'],
            alias: {
                src: path.resolve(__dirname, '../src'),
                dist: path.resolve(__dirname, '../dist'),
            }
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
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=\.]+)?$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }, {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192'  // inline base64 URLs for <=8k images, direct URLs for the rest
                }]
            },
            ts: {
                transpileOnly: true,
                compilerOptions: {
                    declaration: false,
                },
            },
            plugins: [
                new BrowserSyncPlugin({
                    // browse to http://localhost:3000/ during development,
                    // ./public directory is being served
                    host: '0.0.0.0',
                    port: 4000,
                    server: {
                        baseDir: [path.resolve(__dirname, 'dist')]
                    },
                    reloadDelay: 100,
                    reloadDebounce: 300,
                }),
                new CleanWebpackPlugin(['dist'], {
                    root: __dirname,
                    verbose: true,
                }),
                new HtmlWebpackPlugin({
                    template: '!!pug!' + path.resolve(__dirname, 'index.jade'),
                    baseHref: isProduction ? '/ng-lightning/' : '/',
                }),
                new webpack.DefinePlugin({
                    __ENV__: JSON.stringify({
                        now: dateFormat(new Date(), 'dd mmm yyyy'),
                        version: pkg.version,
                        production: isProduction,
                        pkg,
                    }),
                }),
                new CopyWebpackPlugin([{
                    from: path.resolve(__dirname, '../node_modules/@salesforce-ux/design-system/assets'),
                    to: 'assets'
                }, {
                    from: path.resolve(__dirname, '../node_modules/prismjs/themes/prism-okaidia.css'),
                    to: 'assets/prismjs'
                }, {
                    from: path.resolve(__dirname, 'img'),
                    to: 'img'
                }, {
                    from: path.resolve(__dirname, 'index.css')
                }, {
                    from: path.resolve(__dirname, '../node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'),
                    to: 'assets/bootstrap-datetimepicker/bootstrap-datetimepicker.js'
                }, {
                    from: path.resolve(__dirname, '../node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'),
                    to: 'assets/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css'
                }, {
                    from: path.resolve(__dirname, '../node_modules/moment/min/moment.min.js'),
                    to: 'assets/moment/moment.min.js'
                }, {
                    from: path.resolve(__dirname, 'demo.css'),
                    to: 'assets'
                }, {
                    from: path.resolve(__dirname, '../node_modules/bootstrap/dist/js/bootstrap.min.js'),
                    to: 'assets'
                }, {
                    from: path.resolve(__dirname, '../node_modules/jquery/dist/jquery.min.js'),
                    to: 'assets'
                }, {
                    from: path.resolve(__dirname, './assets/polyfill.min.js'),
                    to: 'assets'
                }, {
                    from: path.resolve(__dirname, '../node_modules/node-waves/dist/waves.min.js'),
                    to: 'assets'
                }, {
                    from: path.resolve(__dirname, '../node_modules/node-waves/dist/waves.min.css'),
                    to: 'assets'
                }
            ]),
                // new BrowserSyncPlugin({
                //   host: '0.0.0.0',
                //   port: 1111,
                //   open: false,
                //   server: {
                //     baseDir: [path.resolve(__dirname, 'dist')]
                //   },
                //   reloadDelay: 100,
                //   reloadDebounce: 300,
                // })
            ],
        };

        if (isProduction) {
            config.plugins.push(
                new webpack.optimize.OccurenceOrderPlugin(true),

                // Only emit files when there are no errors
                new webpack.NoErrorsPlugin(),

                // Dedupe modules in the output
                new webpack.optimize.DedupePlugin(),

                // Minify all javascript, switch loaders to minimizing mode
                new webpack.optimize.UglifyJsPlugin({
                    beautify: false,
                    // Angular 2 is broken again, disabling mangle until fix
                    mangle: false,
                    compress: {
                        screw_ie8: true
                    },
                    comments: false,
                })
            );
        }

        module.exports = config;
