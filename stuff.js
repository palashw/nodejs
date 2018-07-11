//define contents of module
var counter = function(arr){
    return 'There are ' + arr.length + ' elements';
}

var adder = function(a,b){
    return `Sum of numbers is ${a+b}`//template string
}

var pi = 3.142; //or module.exports.pi = 3.142 - setting it directly

// console.log(counter(['a','b','c']));

//allow content to be made available to other files from this module
// module.exports = counter; //retunrs q function when we put require

// ////exporting multiple things:
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


////another way
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};