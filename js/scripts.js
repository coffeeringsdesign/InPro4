// Business Logic
// constructor ---- name = size
function Order(name, totalPrice) {
  this.name = name;
  this.totalPrice = totalPrice;
}
// empty array for toppings
var pizzaToppings = [];
// ---------------------------------
// prototype function to set name and price
Order.prototype.getsize = function(name) { //being called!
  // console.log(this.name); // ---- not working
  if (this.name === "smallPizza") {
  this.basePrice = 7.00;
  // console.log(this.name);
  return; //working up thru this return
} else if (this.name === "mediumPizza") {
  this.basePrice = 10.00;
  $("#sizeDisplayMedium").show(); //
  // console.log(this.name);
  return;
} else if (this.name === "largePizza") {
  this.basePrice = 15.00;
  ("#sizeDisplayLarge").show();
  // console.log(this.name);
  return;
}
}

//calculate price total
Order.prototype.totalPrice = function(toppingsPrice) {
  var toppingNumber = toppingsPrice.length * .50;
  var total = toppingNumber + this.basePrice
  // console.log(this.toppingNumber);
}
// ------------------------
// User Interface
$(document).ready(function() {
  var order = new Order();

  $("#small").click(function() {
    this.name = "smallPizza"; //sets name - works
    $("#sizeDisplaySmall").show(); //showsinsidebar
    order.getsize(); //calls function
    // console.log(this.name);
    // this.name console.logs at this point
  });
  $("#medium").click(function() {
    this.name = "mediumPizza"; //sets name - works
    $("#sizeDisplayMedium").show(); //shows in sidebar
    order.getsize();
    // console.log(this.name); //these show up correctly!!!
  });
  $("#large").click(function() {
    this.name = "largePizza"; //sets name - works
    $("#sizeDisplayLarge").show(); //shows in sidebar
    order.getsize();
    // console.log(this.name);
  });

// -------------------------
  $("#chooseToppings").click(function(event) {
    event.preventDefault();
    $('.custom-control-input:checked').each(function(){
     var toppingsPrice = ($(this).val());
     // console.log(this.toppings); //yessss it is logging
    });
  });

  $("#placeOrder").submit(function(event) {
    event.preventDefault();
    $("#orderPlaced").show();
    $("#showFinalPrice").text(totalPrice);
  })

});
