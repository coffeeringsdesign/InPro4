// Business Logic
// constructor ---- name = size
function Pizza(name, price, topping) {
  this.name = name;
  this.price = price;
  this.topping = topping;
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

Pizza.prototype.name = function() {
  if (this.name ===
}

Pizza.prototype.price = function() {
  
}

Pizza.prototype.topping = function() {
  var pizzaToppings = this.topping;
};


// User Interface
$(document).ready(function() {
  $(".sizes").last().click(function() {
    if ($("input[name='smallPizza']:checked").val()) {
      this.name = smallPizza;
      this.price = 7.00;
      $("#sizeDisplaySmall").show();
    } else if ($("input[name='mediumPizza']:checked").val()) {
      this.name = mediumPizza;
      this.price = 10.00;
      ("#sizeDisplayMedium").show();
    } else ($("input[name='largePizza']:checked").val()) {
      this.name = largePizza;
      this.price = 15.00;
      ("#sizeDisplayLarge").show();
    }
  });

});
