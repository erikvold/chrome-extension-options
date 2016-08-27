var path = require("path");

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader',
				exclude: /node_modules/
			}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	resolve: {
		extensions: ['', '*.js', '*.jsx']
	}
};
