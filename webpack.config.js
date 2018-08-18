const devMode = process.env.NODE_ENV !== "production";
const path = require( "path" );
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );

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
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })  
            },
            {
                test: /\.css$/,
                use: [
                  { loader: 'postcss-loader', options: { syntax: 'sugarss' } }
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
