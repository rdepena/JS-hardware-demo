var jhonnyServer = function (io) {
  var five = require("johnny-five"),
      board,
      potentiometer,
      led;

  board = new five.Board();

  board.on("ready", function() {
    console.log('board ready');
    button = new five.Button(7);
    led = new five.Led.RGB({
      pins: {
        red: 3,
        green: 5,
        blue: 6
      }
    });
    led.on();
    led.color("#FF1100");

    button.on("down", function() {
      io.emit('button:press');
      console.log("down");
    });
    console.log('wtf is wrong');
    io.on("color:change", function (data) {
      led.color(data);
    });

    button.on("hold", function() {
      io.emit('button:hold');
      console.log("hold");
    });

  });
};
module.exports = {
  init: jhonnyServer
};
