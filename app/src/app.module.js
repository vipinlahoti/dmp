'use strict';

require('../style/main.scss');
require('angular');

angular.module('dmPortal', [
  require('./core/core.module.js'),
  // require('./common/common.module.js'),
  require('./welcome/welcome.module.js')
]);
