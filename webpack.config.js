var webpack = require('webpack');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
      'vendor': './src/vendor.ts',
      'main': './src/main.ts'
    },
    output: {
      path: './dist',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    postcss: [autoprefixer],
    module: {
      loaders: [
        {test: /\.ts$/, loader: 'ts'},
        {test: /\.css$/, loaders: ['style', 'css']},
        {test: /\.(woff(2)?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      ],
      
    },
    resolve: {
      extensions: ['', '.js', '.ts', '.json', '.css', '.html']
    },
    plugins: [
      new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      })
    ]
};