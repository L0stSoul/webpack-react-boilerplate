import Autoprefixer from 'autoprefixer';

export default {
    name: 'client',
    context: __dirname + "/client",
    entry: "./app.jsx",

    output: {
        filename: "client.bundle.js",
        path: __dirname + "/bundle",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss',

            }
        ]
    },
    plugins: [
    ],
    postcss: () => [Autoprefixer]
};
