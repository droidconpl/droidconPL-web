#!/usr/bin/env bash

npm run build
cp CNAME dist
npm run deploy
