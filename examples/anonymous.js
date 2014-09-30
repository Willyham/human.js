// Anonymous function with bad stack trace
something(function(){
});

// Named function as callback
something(function inner(){
});

// Function declared as variable
var x = function inner(){

};