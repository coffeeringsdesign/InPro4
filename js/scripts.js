// Business Logic

function Order(size, totalPrice) {
  this.size = size;
  this.totalPrice = totalPrice;
}

var pizzaToppings = [];
var size;


Order.prototype.getsize = function(size) {
  if (size === "smallPizza") {
  var price = 7.00;
  return price;
} else if (size === "mediumPizza") {
  var price = 10.00;
  return price;
} else if (size === "largePizza") {
  var price = 15.00;
  return price;
}
}


Order.prototype.totalPrice = function(toppingsPrice) {
  var toppingNumber = toppingsPrice.length * .50;
  var total = toppingNumber + price;
console.log(total);
}


// User Interface
$(document).ready(function() {
  var justOrdered = new Order();

  $("#small").click(function() {
    var size = "smallPizza"; 
    $("#sizeDisplaySmall").show();
    justOrdered.getsize(size);
  });

  $("#medium").click(function() {
    var size = "mediumPizza";
    $("#sizeDisplayMedium").show();
    justOrdered.getsize(size);
  });

  $("#large").click(function() {
    var size = "largePizza";
    $("#sizeDisplayLarge").show();
    justOrdered.getsize(size);
  });

// -------------------------
  $("#chooseToppings").click(function(event) {
    event.preventDefault();
    $('.custom-control-input:checked').each(function(){
     var toppingsPrice = ($(this).val());
     // console.log(toppingsPrice); //yessss it is logging
    });
  });

  $("#placeOrder").submit(function(event) {
    event.preventDefault();
    $("#orderPlaced").show();
    $("#showFinalPrice").text(totalPrice);
  })

});
