'use strict';

const MODULE_NAME = module.exports = 'dmPortal.core';

angular
  .module(MODULE_NAME, [
    require('angular-route'),
    require('restangular')
  ])
  .config(require('./restangular.config.js'))
  .config(require('./router.config.js'))
  .run(require('./router.run.js'))
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('requestInterceptor');
  })
  .factory('requestInterceptor', requestInterceptor);

function requestInterceptor($q) {
  return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      if(_.includes(res.config.url, 'api')) {
        return res.data;
      }
      return res;
    },

    responseError: function(res) {
      return $q.reject(res);
    }
  }
}
