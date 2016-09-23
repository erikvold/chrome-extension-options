const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/demo/index.jsx',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'options.js',
		publicPath: 'build/'
	},
	devtool: 'eval-source-map',
	debug: true,
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.png$/,
				loader: 'file-loader?name=assets/[name].[ext]',
				include: /assets/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/styles.css')
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
