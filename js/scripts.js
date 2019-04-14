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


        // back end logic
        function Pizza(crust, size, sauce) {
            this.crust = crust;
            this.size = size;
            this.sauce = sauce;
        }

        let NewUser = new Pizza(userSize, userSauce, userCrust);
        let total = "";


        let getThePrice = function (total) {
            if (total < 3) {
                price = "$5"
            } else if (total < 5) {
                price = "$10"
            } else {
                price = "$20"
            }
            return price;
        };
        var resultPrice = getThePrice(totalValue);
        var result = "Your pizza is: " + userCrustText +' ' + userSizeText+' ' + 'with'+ ' '+ userSauceText+". The price is: " + resultPrice;

        $("#priceOfPizza").text(result);
        $("#hiddenText").show();
        $("#buyPizza").click(function () {
            $("#firstPage").fadeOut();
            $("thankYourPage").fadeIn();
        });


    });
});