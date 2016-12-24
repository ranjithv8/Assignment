var webpack = require('webpack');

module.exports = {
	entry:'./app/main.ts',
	output:{
		path: '../build/public/js',
		filename: 'app.bundle.js'
	},

	module: {
		loaders: [
			{test: /\.ts$/, loader:'ts'},
			{
			  test: /\.scss$/,
			  exclude: /node_modules/,
			  loaders: ['raw-loader', 'sass-loader'] 
			}
		]
	},

	resolve: {
		extensions:['','.js','.ts']
	}
}