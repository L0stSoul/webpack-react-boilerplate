module.exports = [
    {
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
                    loaders: ['babel']
                }
            ]
        }
    },
];
