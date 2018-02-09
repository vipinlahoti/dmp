'use strict';

module.exports = configuration;

/* @ngInject */
function configuration($routeProvider) {
  $routeProvider.otherwise('/welcome');
}
