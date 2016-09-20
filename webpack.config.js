var path = require("path");

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
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
