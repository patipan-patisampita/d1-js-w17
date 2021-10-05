//Create an Object Parse JSON
var myClient = '{ "name": "Mark", "age": 30, "city": "New York"}';
  
  // "car": {
  //   "make": "Toyota",
  //   "Model": "V1",
  // },


var myPer = JSON.parse(myClient);

document.getElementById(
  "demo"
).innerHTML = `${myPer.name} ${myPer.age} ${myPer.city}`;

document.writeln(`${myPer["name"]} ${myPer["age"]} ${myPer["city"]}`);
document.writeln("<br/>" + myPer.name);
console.log(myPer);
