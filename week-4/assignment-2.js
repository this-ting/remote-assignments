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
}); ​// you should get product information in JSON format and render data in the page 
*/


function ajax(src, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(xhttp.readyState === 4 && xhttp.status === 200){
        let productList = JSON.parse(xhttp.responseText);
        callback(productList);
      };
    };
    xhttp.open("GET", src);
    xhttp.send();
  };
  
function render(data){
    let Table = document.createElement("table"); 
    for(let i =0; i < data.length ; i++ ){
        var addRow = Table.insertRow(data[i]);
        addRow.insertCell(0).innerHTML = data[i].name;
        addRow.insertCell(1).innerHTML = data[i].price;
        addRow.insertCell(2).innerHTML = data[i].description;
    };
    let addDiv = document.getElementById("info");
    addDiv.appendChild(Table);
};
  
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
    render(response);
}); ​