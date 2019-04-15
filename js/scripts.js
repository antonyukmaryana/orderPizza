$(document).ready(function () {
    $("form#pizza").submit(function (event) {
        event.preventDefault();

        let userCrust = $("select#crust").val();
        let userSize = $("select#size").val();
        let userSauce = $("select#sauce").val();
        let totalValue = parseInt(userCrust) + parseInt(userSize) + parseInt(userSauce);

        let userCrustText = $("select#crust  option:selected").text();
        let userSizeText = $("select#size  option:selected").text();
        let userSauceText = $("select#sauce  option:selected").text();
        function Topping (name,price){
            this.name = name;
            this.price = price;
        }
        let toppings = [];
        $("#toppings input:checked").each(function(){
            let name = $(this).attr("name");
            let price =parseInt( $(this).val());
            toppings.push(new Topping(name, price));
        });

        
        function Pizza(crust, size, sauce, toppings) {
            this.crust = crust;
            this.size = size;
            this.sauce = sauce;
            this.toppings = toppings;
        }

        let pizza = new Pizza(userSize, userSauce, userCrust, toppings);
        let total = "";


        let getThePrice = function (total) {
            if (total < 5) {
                price = "$5"
            } else if (total < 10) {
                price = "$10"
            } else {
                price = "$20"
            }

            return price;
        };
        let allToppingsNames = "";
        pizza.toppings.forEach(function(topping){
            totalValue = totalValue + topping.price;
            allToppingsNames +=" " + topping.name;
        });
        var resultPrice = getThePrice(totalValue);


        var result = "Your pizza is: " + userCrustText + ' ' + userSizeText + ' '
            + 'with' + ' ' + userSauceText + " and toppings " + allToppingsNames
            + ". The price is: " + resultPrice;

        $("#priceOfPizza").text(result);
        $("#hiddenText").show();
        $("#buyPizza").click(function () {
            $("#firstPage").fadeOut();
            $("thankYourPage").fadeIn();
        });


    });
});