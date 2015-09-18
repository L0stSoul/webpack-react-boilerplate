import BaseConfig from './es5.webpack.base.config.js';
import Webpack from 'webpack';

BaseConfig.plugins.push(new Webpack.optimize.UglifyJsPlugin());

export default BaseConfig;
