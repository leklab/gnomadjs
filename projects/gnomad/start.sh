#!/bin/bash

set -eu

PROJECT_DIR=$(dirname "${BASH_SOURCE}")
cd $PROJECT_DIR

export PATH=$PATH:$PROJECT_DIR/../../node_modules/.bin

#export NODE_ENV="development"
export NODE_ENV="production"
export GA_TRACKING_ID="UA-149585832-1"
#export GNOMAD_API_URL=${GNOMAD_API_URL:-"https://gnomad.broadinstitute.org/api"}
export GNOMAD_API_URL=${GNOMAD_API_URL:-"http://34.67.114.177:8007"}

WEBPACK_DEV_SERVER_ARGS=""
#if [ "$LOGNAME" = "vagrant" ]; then
  WEBPACK_DEV_SERVER_ARGS="--host=0.0.0.0 --port 80 --watch-poll --disable-host-check"
#fi

webpack-dev-server --config=./config/webpack.config.client.js --hot $WEBPACK_DEV_SERVER_ARGS
