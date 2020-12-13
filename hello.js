const sayHello = function (name) {
  console.log ("Hello," + name);
}

sayHello("Idil" );
sayHello ("beyonce");
sayHello ("Rabia");


// console.log 

const returnSayHello = function (name) {
  return  "Hello," + name; 
}

const greeting = returnSayHello ('John');

console.log (greeting);