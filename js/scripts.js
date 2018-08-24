// Business Logic

function Order(size, totalPrice) {
  this.size = size;
  this.totalPrice = totalPrice;
}

var pizzaToppings = [];
var size;
var toppingsPrice;
var price;

Order.prototype.getsize = function(size) {
  if (size === "smallPizza") {
  return price = 7.00;
} else if (size === "mediumPizza") {
  return price = 10.00;
} else if (size === "largePizza") {
  return price = 15.00;
}
}

Order.prototype.getPrice = function(toppingsPrice) {
  var finalTally = (pizzaToppings.length * .5) + price;
  console.log(finalTally);
  return finalTally;
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

  $("#chooseToppings").click(function(event) {
    event.preventDefault();
    $('.custom-control-input:checked').each(function(){
     var toppingsList = ($(this).val());
     pizzaToppings.push(toppingsList);
     console.log(pizzaToppings);
     var endingTotal = justOrdered.getPrice(toppingsPrice);
    });
  });

  $("#placeOrder").submit(function(event) {
    event.preventDefault();
    $("#orderPlaced").show();
    $("#showFinalPrice").text(finalTally);
  })
});
