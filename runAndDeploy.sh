#!/usr/bin/env bash

npm run build
cp CNAME dist
cp -R src/assets/images/favicon/. dist/assets/meta
mv dist/assets/meta/favicon.ico dist
npm run deploy
