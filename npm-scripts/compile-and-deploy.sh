#!/bin/bash

NODEBIN="./node_modules/.bin"


mkdir -p ./server-bundle
cp -R ./server/* ./server-bundle
$NODEBIN/babel server --out-dir server-bundle
$NODEBIN/babel-node $NODEBIN/webpack --config webpack.production.config.js

ENV=production $NODEBIN/forever start server-bundle/server.production.js --uid "production"
