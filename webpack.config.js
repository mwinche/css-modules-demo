'use strict';

module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: "app.js"
    },
    devtool: 'source-map',
    babel: {
      presets: ['es2015']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/,
              loaders: [
                'style-loader',
                'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]'
              ]
            }
        ]
    }
};
