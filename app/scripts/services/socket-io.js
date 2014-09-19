'use strict';

/**
 * @ngdoc service
 * @name jsAndHardwareDemo.socketIo
 * @description
 * # socketIo
 * Service in the jsAndHardwareDemo.
 */
angular.module('jsAndHardwareDemo')
  .service('socketIo', function SocketIo($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var that = this;

    that.connect = function () {
        that.socket = io();
    };

    that.connect();
  });
