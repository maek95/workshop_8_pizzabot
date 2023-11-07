const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`
);

let orderName = ""; // initialize user input
// Below we check if the user input matches the pizzas we sell. We allow the user to write with upper or lowercase, and it is ok for the user to not "pizza" (e.g. only writes "hawaiian") because we add it ourselves if so.
while (
  orderName != vegetarian.toLowerCase() &&
  orderName != hawaiian.toLowerCase() &&
  orderName != pepperoni.toLowerCase()
) {
  orderName = prompt("Enter the name of the pizza you want to order today."); // user input AGAIN
  orderName = orderName.trim().toLowerCase(); // remove whitespaces at start and end, and make string lower case.
  if (!orderName.includes("pizza")) {
    orderName = orderName + " pizza"; // "hawaiian" becomes "hawaiian pizza"
  }
  // alert(orderName); // test
}
/*  // another way to allow user to not write "Pizza"...
// let orderNameArray = orderName.split(" "); // split orderName up into an array of words so we can remove "Pizza"...
// orderName = parts[0].toLowerCase(); // e.g. orderName = "hawaiian"
*/

// small note: due to the while loop above, the orderName will be lowercase...! The prompt will show "hawaiian pizza" instead of "Hawaiian Pizza".
let orderQuantity = prompt(`How many of ${orderName} do you want?`); 
orderQuantity = parseInt(orderQuantity); // make sure the user input is an integer (heltal)... e.g. 5.7 will transform to 5... HOWEVER, still an issue if user writes a string!
// Number.isInteger(orderQuantity)
while (orderQuantity < 0 ) { 
  orderQuantity = prompt(`Please insert a real amount...How many of ${orderName} do you want?`); 
  orderQuantity = parseInt(orderQuantity);
}

let orderWaitTime = 0; // initialize...
//if ( (1 <= orderQuantity <= 2) ) {
if ( (orderQuantity >= 1 && orderQuantity <= 2) ) {
  orderWaitTime = 10; // minutes...
//} else if ( (3 <= orderQuantity <= 5) ) {
} else if ( (orderQuantity >= 3 && orderQuantity <= 5) ) {
  orderWaitTime = 15;
} else { // if 6+ pizzas.. or negative pizzas (controlled for that earlier though))
  orderWaitTime = 20;
}

let orderTotal = orderQuantity * pizzaPrice; 
alert(
  `Great, I'll get started on your ${orderQuantity} ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderWaitTime} minutes.`
);
