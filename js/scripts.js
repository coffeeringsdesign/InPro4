// Business Logic
// constructor ---- name = size
function Order(name, basePrice, toppings, toppingsPrice, totalPrice) {
  this.name = name;
  this.basePrice = basePrice;
  this.topping = toppings;
  this.toppingsPrice = toppingsPrice;
  this.totalPrice = totalPrice;
}


// empty array for toppings
var pizzaToppings = [];

// prototype function to set name and price
Order.prototype.getsize = function() { //being called!
  // this.name not loggingat this point
  if (this.name = "smallPizza") {
  this.basePrice = 7.00;
  return; //working up thru this return
  console.log(this.name);
} else if (this.name = "mediumPizza") {
  this.basePrice = 10.00;
  $("#sizeDisplayMedium").show();
  console.log(this.name);
  return;
} else if (this.name = "largePizza") {
  this.basePrice = 15.00;
  ("#sizeDisplayLarge").show();
  console.log(this.name);
  return;
}
}

// Order.prototype.totalPrice = function() {
//
// }
//
// Order.prototype.topping = function() {
//   var pizzaToppings = this.topping;
// };


// User Interface
$(document).ready(function() {
  var order = new Order();

  $("#small").click(function() {
    this.name = "smallPizza"; //sets name - works
    $("#sizeDisplaySmall").show(); //showsinsidebar
    order.getsize(); //calls function
    // this.name console.logs at this point
  });

  $("#medium").click(function() {
    this.name = "mediumPizza"; //sets name - works
    $("#sizeDisplayMedium").show(); //shows in sidebar
    order.getsize();
  });

  $("#large").click(function() {
    this.name = "largePizza"; //sets name - works
    $("#sizeDisplayLarge").show(); //shows in sidebar
    order.getsize();
  });

  // $("#chooseToppings").submit(function(event) {
  //
  // })
});
