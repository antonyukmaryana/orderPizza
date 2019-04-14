$().ready(function(){
   $("form#price") ,submit(function(event){
       prevent.eventDefault();

       var userCrust = $("select#crust").val();
       var userSize = $("select#size").val();
       var userSauce = $("select#sauce").val();
       var totalValue = parseInt(userCrust)+parseInt(userSize)+parseInt(userSauce)


    // back end logic
    function Pizza (crust,size,sauce)  {
           this.crust = crust;
           this.size = size;
            this.sauce = sauce;
    }
    var getThePrice = function(total){
           if(total < 6){
               price = "$5"
           }else if (total < 8){
               price = "$10"
           }else{
               price = "$20"
           }
           return price
    }
    var resultPrice = getThePrice(totalValue);
       var result = "Your pizza is: " + userCrust + userSauce + userSize +". The price is: "+resultPrice;

       $("#priceOfpizza").text(result);
       $("hiddenText").show();
       $("#butTickets").click(function(){
           $("#firstPage").fadeOut();
           $("thankYourPage").fadeIn();
       });


   });
});