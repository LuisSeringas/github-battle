/* eslint-disable import/no-extraneous-dependencies */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //This is the entry point of the project, so basically Webpack goes to this file and looks for all dependent modules
    entry: './app/index.js',
    //all the dependent modules in our entry point are bundle for Webpack into a single File, so when we run the Webpack,
    //is going to create a new directory with name (__dirname == github-battle), inside that folder is going to create another folder named by:
    //'dist' and finally inside that one is created a single file with all our code named by 'index_bundle.js' 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    //We can apply some rules in our modules, and some off them are really necessary, for example:
    module: {
        rules: [
            //For the browser understand our JavaScript code we need to do some transformations in it, and to do that we going to use BABEL
            //This going to check for all files ended in '.js' and give them to BABEL to do the translation
            {test: /\.js$/, use: 'babel-loader'},

            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode: 'development',
    //This html-webpack-plugin do, is basically create an html file in 'dist' folder together with the 'index__bundle.js',
    //for that we need to give to the plugin an template html 
    //if we repair or entry point, we said to ReactDOM to render an '<APP/>' component into an 'app' element that already exits on html('template')
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};