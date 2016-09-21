const path = require('path');
const webpack = require('webpack')

module.exports = {
	entry: './src/components/index.js',
	output: {
		path: path.resolve(__dirname, "lib"),
		filename: 'index.js',
		library: 'chrome-extension-options',
		libraryTarget: 'umd',
    umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx|\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
