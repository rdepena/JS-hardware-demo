'use strict';

/**
 * @ngdoc function
 * @name jsAndHardwareDemo.controller:ParentctrlCtrl
 * @description
 * # ParentctrlCtrl
 * Controller of the jsAndHardwareDemo
 */
angular.module('jsAndHardwareDemo')
  .controller('ParentCtrl', function ($scope, socketIo, $element) {
    socketIo.socket.on('button:press', function (){
      $element[0].classList.toggle('invert');
    });
    socketIo.socket.on('button:hold', function (){
      $element[0].classList.toggle('red');
    });
  });
