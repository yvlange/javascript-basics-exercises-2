// function greet(userName) {
//   if (userName === "") {
//     return "Hello Mr. Nobody";
//   } else {
//     let result = `Hello ${userName}`;
//     return result;
//   }
// }

// alert(greet("Tim"));
// alert(greet("Tom"));
// alert(greet("Marie"));
// alert(greet(""));

function greet(userName = "Mr. Nobody") {
  return `Hello ${userName}`;
}

let greetNamir = alert(greet("Namir"));
let greetYvonne = alert(greet("Yvonne"));
let greetRikki = alert(greet("Rikki"));
let greetEmpty = alert(greet());
