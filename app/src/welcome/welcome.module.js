'use strict';

var name = module.exports = 'dmPortal.welcome';

angular
  .module(name, [])
  .config(configuration)
  .controller('Welcome', require('./welcome.controller.js'))
;

function configuration($stateProvider) {
  $stateProvider
    .state('Welcome', {
      url: '/welcome',
      template: require('./welcome.html'),
      controller: 'Welcome as vm',
      title: 'ng-Super Welcome'
    });

}
