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
var fs = require('fs');//module for data analysis

// //reading file synchronously
// var readme = fs.readFileSync('readme.txt', 'utf8'); //blocking code method(synchronous). filename. encoding
// console.log(readme);//reading

// fs.writeFileSync('writeme.txt',readme);//write file synchronously
// fs.writeFileSync('writeme.txt','asshole too');//this will over ride the previous write

//reading asynchronously. file name, encoding, call back fn to fire when reading is done
// fs.readFile('readme.txt','utf8',function(err,data){
//     console.log(data);
// })

// console.log('test');//this executes first until the file is fully read. then call back fn is triggered

// //writing file with asynchoronous method
// fs.readFile('readme.txt','utf8', function(err,data){
//     fs.writeFile('writeme.txt', data, function(err){ //important to define err function here
//         if(err) throw err;
//     });
// });

//////////////////////video 10 - creating and removing dirs

// //deleting files
// fs.unlink('writeme.txt', function(err){
//     if (err) throw err;
// });

// //making dir synchronously
// fs.mkdirSync('stuff');

// //deleting dir synchronously
// fs.rmdirSync('stuff');

// //making dir asynchronously
// fs.mkdir('stuff', function () {
//   fs.readFile('readme.txt', 'utf8', function (err, data) {
//     fs.writeFile('./stuff/writeme.txt', data, function (err) {
//       if (err) throw err;
//     })
//   })
// })

// //deleting file and directory
// fs.unlink('./stuff/writeme.txt', function(err){
//   if (err) throw err;
//   fs.rmdir('stuff');
// })

/////////////////////video 11 - clients and servers
// client => browser
// protocol => communication rules
// ports => to listen to the request and respond from a particular port location

////////////////////video 12 - creating a server

// var http = require('http');// core module

// //setting up server
// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'}); //header
//   res.end('Hey ninjas'); //end msg
// });

// server.listen(3000, '127.0.0.1'); //port setup
// console.log('you dawgs, listening to 3000 port');

//////////////////////// video 13 - streams and buffers

//////////////////////// video 14 - readable stream

// writable , readable, duplex: both

// var http = require('http');

// var fs = require('fs');

// var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

// //createReadStream inherits from event emitter. event called data-allows us to listed data coming in chunks

// myreadstream.on('data', function(chunk){
//   console.log('new chunk received');
//   // console.log(chunk);
// })

///////////////////////// video 15 - writable streams
// var http = require('http');
// var fs = require('fs');

// var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// //writable stream
// var mywritestream = fs.createWriteStream(__dirname + '/writeme.txt');

// myreadstream.on('data', function(chunk){
//   console.log('new chunk received');
//   mywritestream.write(chunk); //writing chunks into mywritestream. so bit at a time
// })

/////////////////// video 16 - pipes
//take data from read and pipe to write. no need to manually listen and write

var http = require('http');
var fs = require('fs');

//pipe can be used fron readable streams only


//setting up server
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'}); //header
  var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
  myreadstream.pipe(res);
});

server.listen(3000, '127.0.0.1'); //port setup
console.log('you dawgs, listening to 3000 port');
