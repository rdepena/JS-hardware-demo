var dualShockServer = function (io) {

  var buffer = {
        x : [],
        y : []
      },
      maxSample = 5;

  var smooth = function(axis, val) {
      var sum;

      //add the new value.
      buffer[axis].push(val);

      //if the max sample size has been reached, drop the tail
      if (buffer[axis].length >= maxSample) {
          buffer[axis].shift();
      }

      //sum and average out.
      sum = buffer[axis].reduce(function(x, y) {
          return x + y;
      });
      return Math.floor(sum / buffer[axis].length);
  };
  var controller = require('dualshock-controller')(
    {
        //you can use a ds4 by uncommenting this line.
        //config: "dualshock4-generic-driver",
        //if using ds4 comment this line.
        config : "dualShock3",
        //smooths the output from the acelerometers (moving averages) defaults to true
        accelerometerSmoothing : true,
        //smooths the output from the analog sticks (moving averages) defaults to false
        analogStickSmoothing : false
    });

  controller.on('rightLeft:motion', function (data) {
      io.emit('rightLeft:motion', smooth('y', data.value));
  });
  controller.on('forwardBackward:motion', function (data) {
      io.emit('forwardBackward:motion', smooth('x', data.value));
  });
  controller.connect();
}




module.exports = {
  init : dualShockServer
};
