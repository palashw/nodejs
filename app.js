console.log('hey buddy');

//ctr + ` to start terminal

////methods for global object in njs
// setTimeout(function(){
//     console.log('3 seconds have passed')
// }, 3000);

////set interval method
// var time = 0;
// setInterval(function(){
//     time += 2;
//     console.log(time + 'seconds have passed');
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

////normal function statement. ctrl k + u to remove out commented code
// function sayHi(){
//     console.log('hi');
// }

// sayHi();

////function expression

// var sayBye = function(){
//     console.log('Bye');
// };

// sayBye();

////pass functions

// function callFunction(fun){
//     fun();
// }

// callFunction(sayBye);

////modules- chunks of reusable code

////require count js invoking
// var stuff = require('./stuff'); // setting the counter variable equal to what is returned from require module. stuff stores all of the items from module in stuff

// console.log(stuff.counter(['a','b','c']));
// console.log(stuff.adder(5,6));

// var events = require('events');

// var myEmitter = new events.EventEmitter();//making myEmitter object from events module

// //we can make out own events and set the function to perform on emitting that
// myEmitter.on('someEvent', function(msg){ //defining on someEvent
//     console.log(msg);
// })

// myEmitter.emit('someEvent', 'the event emitted'); //emiting the sommeEvent
////////////////////////////////////////////////////////video 8

// var events = require('events');
// var util = require('util'); //making inherits

// var Person = function(name, title){ //making new object person
//     this.name = name;
//     this.title = title;
// }

// util.inherits(Person, events.EventEmitter); //making person inherit eventemitter method from events module

// var james = new Person('james','W');//making 3 persons
// var mary = new Person('mary','K');
// var ryu = new Person('ryu','C');

// var people = [james, mary, ryu];//storing in array
// //attaching custom events to each person
// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name + ' said' + msg);
//     })
//     person.on('flirt',function(msg){
//         console.log(person.name + ' is '+ msg);
//     })
// })

// james.emit('speak',' hey wassup');
// james.emit('flirt', 'cute');
// mary.emit('speak', ' i want ryu');

/////////////////////video 9 - reading and writing files
var fs = require('fs');