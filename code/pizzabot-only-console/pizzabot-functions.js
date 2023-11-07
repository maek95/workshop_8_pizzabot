const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`
);

let orderName = ""; // have to initialize outside while-loop?
let orderNameEdited = ""; 
let isPizzaOnMenu = false;
// repeat user input until the orderName is found on the menu
while (isPizzaOnMenu == false) {
  orderName = prompt("Enter the name of the pizza you want to order today."); // user input
  orderNameEdited = fixOrderName(orderName); // e.g. if user only writes "hawaiian" it adds " pizza"...
  isPizzaOnMenu = checkOrderName(orderNameEdited);
}

// TODO: fix orderNameEdited so every word starts with capital letters...? "Hawaiian Pizza" instead of "hawaiian pizza"...
let orderQuantity = prompt(`How many of ${orderNameEdited} do you want?`);
orderQuantity = checkAndFixOrderQuantity(orderQuantity); // check so input is an integer (not words, float-numbers, or negative numbers). If not it repeats the input-prompt inside the function.

const orderWaitTime = cookingTime(orderQuantity);

const orderTotal = totalCost(orderQuantity, pizzaPrice);

alert(
  `Great, I'll get started on your ${orderQuantity} ${orderNameEdited} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderWaitTime} minutes.`
);

// ==================================================
// ==================================================
// ==================== FUNCTIONS ===================
// ==================================================
// ==================================================

function fixOrderName(orderName) {
  // We allow the user to write with upper or lowercase, and it is ok for the user to not "pizza" (e.g. only writes "hawaiian") because we add it ourselves if so.
  orderName = orderName.trim().toLowerCase(); // remove whitespaces at start and end, and make string lower case.
  if (!orderName.includes("pizza")) {
    orderName = orderName + " pizza"; // "hawaiian" becomes "hawaiian pizza"
  }
  return orderName;
}

function checkOrderName(orderNameEdited) {
  if (
    orderNameEdited == vegetarian.toLowerCase() ||
    orderNameEdited == hawaiian.toLowerCase() ||
    orderNameEdited == pepperoni.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

function checkAndFixOrderQuantity(orderQuantity) {
  orderQuantity = parseInt(orderQuantity); // make sure the user input is an integer (heltal)... e.g. 5.7 will transform to 5... HOWEVER, still an issue if user writes a string!
  while (!Number.isInteger(orderQuantity)) {
    orderQuantity = prompt(`How many of ${orderNameEdited} do you want?`);
    orderQuantity = parseInt(orderQuantity);
  }
  while (orderQuantity < 0) {
    orderQuantity = prompt(
      `Please insert a real amount...How many of ${orderNameEdited} do you want?`
    );
    orderQuantity = parseInt(orderQuantity);
  }

  return orderQuantity;
}

function cookingTime(orderQuantity) {
  let orderWaitTime = 0;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    orderWaitTime = 10; // minutes...
    //} else if ( (3 <= orderQuantity <= 5) ) {
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    orderWaitTime = 15;
  } else {
    // if 6+ pizzas.. or negative pizzas (controlled for that earlier though))
    orderWaitTime = 20;
  }
  return orderWaitTime;
}


function totalCost(orderQuantity, pizzaPrice) {
  // new variables! Not using the global variables inside this function.
  return orderQuantity * pizzaPrice;
}

