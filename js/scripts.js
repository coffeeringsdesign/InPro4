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

// // object 1 - assigns price to small
// var size1 = {
//   name: "small",
//   price: 7.00,
//   topping: []
// };
//
// // object2 - assigns price to medium
// var size2 = {
//   name: "medium",
//   price: 10.00,
//   topping: []
// };
//
// // object3 - assigns price to large
// var size3 = {
//   name: "large",
//   price: 15.00,
//   topping: []
// };
Order.prototype.getsize = function(name) {
  alert("function is being called");
  if (this.name === "smallPizza") {
  this.price = 7.00;

  console.log(this.name);
  return;
} else if (this.name === mediumPizza) {
  this.price = 10.00;
  $("#sizeDisplayMedium").show();
  console.log(this.name);
  return;
} else if (this.name === largePizza) {
  this.price = 15.00;
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
  var order = new Order(1);

  $("#small").click(function() {
    this.name = "smallPizza"; //sets name - works
    $("#sizeDisplaySmall").show();
    order.getsize();
  });




  // $("#chooseSize").submit(function(event) {
  //   event.preventDefault();
  //   alert("boo");
  //   this.name = ($("input[name='size']:checked").val());
  //   name();
  //   console.log(this.name);
  // });
});
