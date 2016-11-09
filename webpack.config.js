// webpack.config.js
module.exports = {
	entry: './src/js/main.js', //string
	output: { // object
		path: './dist', //bundle of files
		filename: 'bundle.js' //green means good
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader', // will transform the jsx to js
				test: /\.jsx?$/, // only going to load files with .jsx // ? only applies to the
																	  // character b4 it
				exclude: /(node_modules)/,
				query: {
					presets: ['react']
				}
			}
		]
	}
};