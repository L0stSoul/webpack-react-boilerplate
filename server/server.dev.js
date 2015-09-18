
import Server from './server.js';

import Webpack from 'webpack';
import WebpackConfig from '../webpack.dev.config.js';
import WebpackDevMiddleware from 'webpack-dev-middleware';

Server.use(WebpackDevMiddleware(Webpack(WebpackConfig), { noinfo: true }));

Server.listen(3000);
