'use strict';

import restangular from 'restangular';
const MODULE_NAME = module.exports = 'dmPortal.core';

angular
  .module(MODULE_NAME, [
    require('angular-route'),
    'restangular'
  ])
  .config(require('./restangular.config.js'))
  .config(require('./router.config.js'))


