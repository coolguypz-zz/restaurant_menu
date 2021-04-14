
const { resolve } = require("path");
const path = require("path");
const PORT = process.env.port || 3000;
// const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// let mode = "development";
// let target = "web";
// const pluginsArray = [
//     new CleanWebpackPlugin(),
//     new MiniCSSExtractPlugin(),
//     new HtmlWebpackPlugin({
//         template: "./src/index.html",
//         title: "Hot module Replacement",
//     }),
// ];

// if (process.env.NODE_ENV === "production") {
//     mode = "production";
//     // target = "browserslist"
// }
// else {
//     pluginsArray.push(new ReactRefreshPlugin());
// }

module.exports = {
    // entry: "./src/index.js",
    mode: "development",
    // target: target,
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
        filename: "bundle.js",
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:  /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?(c|a)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader?hash=sha512&digest=hex&name=assets/images/[hash].[ext]']
                // type: asset/inline can be use for small img
                // we can leave it asset or asset/resource be default
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|)$/,
                use: {
                    loader: "file-loader",
                },
            },
        ],
    },
    // plugins: pluginsArray,
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
        port: PORT,
        // watchContentBase: true,
        contentBase: "./src",
        // hot: true
    },
}

