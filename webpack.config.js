const path = require( "path" );
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );

const devMode = process.env.NODE_ENV !== "production";

const plugins = [
    new CleanWebpackPlugin([
        'dist',
        'build'
    ]),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css')
];

if ( !devMode ) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    } ) );
}

module.exports = {
    mode: devMode ? "development" : "production",
    context: path.join( __dirname, "app" ),
    devtool: devMode ? "none" : "source-map",
    entry: {
        app: "./client/client.js"
    },
    resolve: {
        modules: [
            path.resolve( "./app" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })  
            },
            {
                test: /\.css$/,
                use: [
                  { loader: 'postcss-loader', options: { syntax: 'sugarss' } }
                ]
            },
            {
                test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins,
};
