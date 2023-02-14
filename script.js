// Access the query parameters using jquery
$('#heading2').html("Java Script Hai boss ye!!");            //slect using id in Jquery
$('#heading1').html("Document object Model");
$('h2').html("JavaScript");  // for selecting the html element
$('.para').html("mene Java Script padh li");   // for selecting the html element using class in JQuery

console.log($('.para'));   

let para=$('.para').eq(1); // this is JQuery object with first index
console.log(para);

let pera=$('.para');
let p1=pera[0];  // this is DOM object 
console.log(p1);
// p1.html('Hello, world')     // this is DOM object we cant use as JQuery object


// We can change the DOM Object into the JQuery object

let p0=$(p1);      // It will return you Jquery object
console.log(p0);

