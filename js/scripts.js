// Business Logic

function Order(size, totalPrice) {
  this.size = size;
  this.totalPrice = totalPrice;
}

var size;
var toppingsPrice;
var price;
var sum;

Order.prototype.getsize = function(size) {
  if (size === "smallPizza") {
  return price = 7.00;
} else if (size === "mediumPizza") {
  return price = 10.00;
} else if (size === "largePizza") {
  return price = 15.00;
}
}

Order.prototype.getPrice = function(toppingsCount) {
  return sum = toppingsCount + price;
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
    toppingsCount = $(":checkbox:checked").length;
    justOrdered.getPrice(toppingsCount);
    $("#showTotal").text("$ " + sum + ".00");
  });

  $("#placeOrder").click(function(event) {
    event.preventDefault();
    $("#orderPlaced").show();
  });
});
