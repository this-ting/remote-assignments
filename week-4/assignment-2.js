/*Assignment 2: Callback Function and Advanced HTML DOM
Complete the functions below to make AJAX call to a URL by GET method, and 
show the response data in the page. You may render UI with any style.
 
function ajax(src, callback){
    // your code here
}
function render(data){
    // your code here.
    // ​document.createElement()​ and a​ ppendChild()​ methods are preferred. 
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response);
}); ​// you should get product information in JSON format and render data in the page */


function ajax(src, callback){
    xhttp.open("GET", src, true);
    xhttp.send();
    console.log()
}
function render(data){
    // your code here.
    // ​document.createElement()​ and a​ppendChild()​ methods are preferred. 
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response);
}); ​// you should get product information in JSON format and render data in the page