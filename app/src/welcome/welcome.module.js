'use strict';

const MODULE_NAME = module.exports = 'dmPortal.welcome';

angular
  .module(MODULE_NAME, [])
  .config(configuration)
  .controller('Welcome', require('./welcome.controller.js'));

function configuration($routeProvider) {
  $routeProvider
    .when('/welcome', {
      template: require('./welcome.html'),
      controller: 'Welcome as vm',
      title: 'ng-Super Welcome'
    });
}
