/* eslint-env node */

'use strict';

var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  var swPrecache = require('sw-precache');
  var rootDir = '.';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: ['./images/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
                      './scripts/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
                      './styles/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}',
                      './index.html',
                      './manifest.json'],
    stripPrefix: rootDir,
    runtimeCaching: [{
      urlPattern: /^https:\/\/api-ratp\.pierre-grimaud\.fr\/v3\/schedules\//,
      handler: 'cacheFirst'
    }]
  }, callback);

});
