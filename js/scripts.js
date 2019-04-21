//business logic
function Topping(name, value) {
  this.name = name;
  this.value = value;
}

function Pizza(crust, size, sauce, toppings, crustName, sizeName, sauceName) {
  this.crust = crust;
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.crustName = crustName;
  this.sizeName = sizeName;
  this.sauceName = sauceName;
}

Pizza.prototype.getPrice = function() {
  let totalValue = this.crust + this.size + this.sauce;
  this.toppings.forEach(function(topping) {
    totalValue += topping.value;
  });

  let price = "";
  if (totalValue < 5) {
    price = "$5"
  } else if (totalValue < 10) {
    price = "$10"
  } else {
    price = "$20"
  }
  return price;
}

Pizza.prototype.getToppingNames = function() {
  let allToppingsNames = "";
  this.toppings.forEach(function(topping) {
    allToppingsNames += " " + topping.name;
  });
  return allToppingsNames;
}

//user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    let userCrust = parseInt($("select#crust").val());
    let userSize = parseInt($("select#size").val());
    let userSauce = parseInt($("select#sauce").val());
    let userCrustText = $("select#crust  option:selected").text();
    let userSizeText = $("select#size  option:selected").text();
    let userSauceText = $("select#sauce  option:selected").text();

    // find all selected toppings
    let toppings = [];

    $("#toppings input:checked").each(function() {
      let name = $(this).attr("name");
      let value = parseInt($(this).val());
      let t = new Topping(name, value);
      toppings.push(t);
    });
    let pizza = new Pizza(userSize, userSauce, userCrust, toppings, userCrustText, userSizeText, userSauceText);

    var result = "Your pizza is: " + pizza.crustName + ' ' + pizza.sizeName + ' ' +
      'with' + ' ' + pizza.sauceName + " and toppings: " + pizza.getToppingNames() +
      ". The price is: " + pizza.getPrice();

    $("#priceOfPizza").text(result);
    $("#hiddenText").show();
    $("#buyPizza").click(function() {
      $("#firstPage").fadeOut();
      $("thankYourPage").fadeIn();
    });

  });
});
