/*
Assignment 3: Function, Array, and Object
Complete the function below to calculate the average price of all the products.

function avg(data){
    // your code here
}
avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {name:"Product 3",
        price:250
        }
    ]
});​ 

// show the average price of all products
*/

function avg(data) {
    var size = data.size;
    var total = 0;
    for ( var i = 0; i < data.products.length; i++) {
        total += data.products[i].price;
    }
    console.log( total / size );
}

/* Using arrow function
const avg = data => {
    var size = data.size;
    var total = 0;
    for ( var i = 0; i < data.products.length; i++) {
        total += data.products[i].price;
    }
    console.log( total / size );
}
*/

avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
});