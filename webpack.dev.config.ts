import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
	// mode tells webpack whether the code needs to be built for development or production
	mode: "development",
	output: {
		publicPath: "/",
	},
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new HotModuleReplacementPlugin(),
	],
	devtool: "inline-source-map",
	devServer: {
		static: path.join(__dirname, "build"),
		historyApiFallback: true,
		port: 3000,
		open: true,
		hot: true,
	},
};

export default config;
