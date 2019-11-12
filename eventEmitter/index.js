var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('eventEmitter', function wtf() {
  console.log(1);
  emitter.on('eventEmitter', wtf);
})

emitter.emit('eventEmitter');