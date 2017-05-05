
exports.babel = {
    test: /\.js|.jsx$/,
    exclude: /node_modules/,
    use: ['babel-loader']
}
exports.style = {

    test: /\.css|.scss$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}
