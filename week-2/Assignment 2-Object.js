/*
Assignment 2: Object
In JavaScript, there are many different sets of syntax for creating objects. In 
the code below,function parameters are encapsulated into an object, try using 
at least ​two ways​ to create a proper object as a parameter of the calculate 
function.

function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    } else if(args.op==="-"){
        result=args.n1-args.n2;
    } else {
        result="Not supported";
}return result;
}

Try to call calculate function correctly
For example, if we have an add function like this:
    function add(args){
        return args.n1+args.n2;
    }
    We can call it by passing an object created by JSON literal:
        add({n1:3, n2:4});
        And, you should find another way to create a proper object your way

*/

function calculate(args){
    let result;
    if(args.op==="+"){
        result=args.n1+args.n2;
    } else if(args.op==="-"){
        result=args.n1-args.n2;
    } else {
        result="Not supported";
} console.log(result);
}


// Using the  Object() constructor
var equation = new Object();
equation['n1'] = 4;
equation['n2'] = 6;
equation['op'] = '+';

calculate(equation);


// Using object literal in calculate function parameters 
calculate({
    n1: 1,
    n2: 2,
    op: "-"
})


// Using JSON literal to call 
var args1 = {
    "n1": 3,
    "n2": 4,
    "op": "+"
};
calculate(args1);
