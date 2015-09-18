#!/bin/bash

NODEBIN="./node_modules/.bin"

$NODEBIN/nodemon --exec $NODEBIN/babel-node server/server.dev.js
