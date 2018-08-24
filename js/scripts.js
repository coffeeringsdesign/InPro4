// Business Logic
// constructor ---- name = size
function Order(name, basePrice, toppings, toppingsPrice, totalPrice) {
  this.name = name;
  this.basePrice = basePrice;
  this.toppings = toppings;
  // this.toppingsPrice = toppingsPrice;
  // this.totalPrice = totalPrice;
}

// empty array for toppings
var pizzaToppings = [];

// prototype function to set name and price
Order.prototype.getsize = function(name) { //being called!
  // console.log(this.name);
  if (this.name === "smallPizza") {
  this.basePrice = 7.00;
  // console.log(this.name);
  return; //working up thru this return
} else if (this.name === "mediumPizza") {
  this.basePrice = 10.00;
  $("#sizeDisplayMedium").show(); //med pizza shows if small isn't an option
  // console.log(this.name);
  return;
} else if (this.name === largePizza) {
  this.basePrice = 15.00;
  ("#sizeDisplayLarge").show();
  // console.log(this.name);
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


  $("#small").click(function() {
    var order = new Order();
    this.name = "smallPizza"; //sets name - works
    $("#sizeDisplaySmall").show(); //showsinsidebar
    order.getsize(); //calls function
    // console.log(this.name);
    // this.name console.logs at this point
  });

  $("#medium").click(function() {
    var order = new Order();
    this.name = "mediumPizza"; //sets name - works
    $("#sizeDisplayMedium").show(); //shows in sidebar
    order.getsize();
    // console.log(this.name); these show up correctly!!!
  });

  $("#large").click(function() {
    var order = new Order();
    this.name = "largePizza"; //sets name - works
    $("#sizeDisplayLarge").show(); //shows in sidebar
    order.getsize();
    // console.log(this.name);
  });

  $("#chooseToppings").submit(function(event) {
    event.preventDefault();
    $('.custom-control-input:checked').each(function(){
     alert($(this).val());
    });
  });




  $("#placeOrder").submit(function(event) {
    event.preventDefault();
  })

});
