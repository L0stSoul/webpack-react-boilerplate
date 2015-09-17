import Express from 'express';

import Webpack from 'webpack';
import WebpackConfig from '../webpack.config.js';
import WebpackDevMiddleware from 'webpack-dev-middleware';

let app = new Express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// app.use(Express.static('bundle'));
app.use(WebpackDevMiddleware(Webpack(WebpackConfig), { noinfo: true }));

app.listen(3000);
