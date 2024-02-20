const path = require('path'); // node js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production', // development
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        about: path.resolve(__dirname, 'src/js/about.js')
    },
    
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Countries | home',
            filename: 'index.html',
            template: 'src/temp.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: 'Countries | About',
            filename: 'about.html',
            template: 'src/tempAbout.html',
            chunks: ['about']
        }),
        new MiniCssExtractPlugin()
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
        hot: true,
    },

    module:{
        rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
          ],
    }

}