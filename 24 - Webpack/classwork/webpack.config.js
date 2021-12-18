const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	const MODE = env.mode;
	const IS_DEV = MODE === 'development';
	const IS_PROD = !IS_DEV;

	return {
		mode: MODE,
		devtool: IS_DEV ? 'eval-source-map' : 'source-map',
		entry: {
			main: path.resolve(__dirname, './src/index.js'),
			timer: path.resolve(__dirname, './src/timer.js')
		},
		optimization: {
			minimize: false,
			runtimeChunk: {
				name: 'runtime',
			},
			splitChunks: {
				cacheGroups: {
					defaultVendors: {
						test: /[\\/]node_modules[\\/]/,
						filename: 'vendor/[name].vendor.js',
						enforce: true,
					},
				},
			}
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, './dist'),
			clean: true
		},
		module: {
			rules: [
				// {
				// 	test: /\.css$/i,
				// 	use: ["style-loader", "css-loader"],
				// },
				{
					test: /\.css$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader"],
				},
				{
					test: /\.less$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					}
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './src/index.html')
			})
		],
	};
};