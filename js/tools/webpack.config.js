var Webpack = require('webpack');

var CommonsPlugin = new Webpack.optimize.CommonsChunkPlugin('/scripts/taro.common.js');
var ProvidePlugin = new Webpack.ProvidePlugin({React: 'react', $: 'jquery', Utils: 'utils', Url: 'url', Config: 'config', Forms: 'forms', ArrayCollection: 'array-collection', Event: 'event'});
var DefinePlugin = new Webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}});
var Uglify = new Webpack.optimize.UglifyJsPlugin({mangle: {except: ['$super', '$', 'exports', 'require']}, compress: {warnings: false}});

module.exports = {
	entry: {
		main: './application/views/Index.js',
		//signin: './application/views/signin/Index.js',
		output: './application/views/output/Index.js',
	},
	output: {
		path: __dirname + '/release/assets',
		publicPath: '/assets',
		//publicPath: 'https://assets.facework.im', // 发行配置
		filename: '/scripts/taro.[name].js',
		chunkFilename: '/scripts/taro.[name].js'
	},
	resolve: {	
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['jsx']
			}
		]
	},
	plugins: [
		CommonsPlugin,
		ProvidePlugin,
		Uglify, // 发行配置
		DefinePlugin, // 发行配置
	]
};