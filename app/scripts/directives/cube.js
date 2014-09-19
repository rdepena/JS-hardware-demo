'use strict';

/**
 * @ngdoc directive
 * @name jsAndHardwareDemo.directive:cube
 * @description
 * # cube
 */
angular.module('jsAndHardwareDemo')
  .directive('cube', function (socketIo) {
    return {
      templateUrl: 'views/cube.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
      },
      link: function postLink(scope, element, attrs) {
        var cube = element[0].querySelector('.cube'),
            rotatex,
            rotatey;

          socketIo.socket.on('rightLeft:motion', function(data) {
            console.log(data);
            if (data) {
              rotatey = 'rotateY(' + (data) + 'deg) ';
              requestAnimationFrame(function () {
                cube.style['-webkit-transform'] = rotatex + rotatey;
              });
            }
          });
          socketIo.socket.on('forwardBackward:motion', function(data) {
            console.log(data);
            if (data) {
              rotatex = 'rotateX(' + (data) + 'deg) ';
              requestAnimationFrame(function () {
                cube.style['-webkit-transform'] = rotatex + rotatey;
              });
            }
          });
      }
    };
  });
