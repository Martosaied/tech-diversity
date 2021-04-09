#! /bin/sh

cd app;
[ ! -d "node_modules" -o -z "$(ls -A -- "node_modules")"  ] && npm install;
npm start;