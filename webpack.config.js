var path = require("path");

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'options.js',
		publicPath: 'build/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
