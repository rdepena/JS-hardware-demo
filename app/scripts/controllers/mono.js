'use strict';

/**
 * @ngdoc function
 * @name jsAndHardwareDemo.controller:MonoCtrl
 * @description
 * # MonoCtrl
 * Controller of the jsAndHardwareDemo
 */
angular.module('jsAndHardwareDemo')
  .controller('MonoCtrl', function ($scope, socketIo) {
    var model = {
        color: '#FF0000'
    };
    $scope.model = model;

    $scope.setColor = function () {
        console.log(model.color);
        socketIo.socket.emit('color:change', model.color);
    };

  });
