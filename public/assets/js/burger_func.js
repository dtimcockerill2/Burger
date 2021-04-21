$(function () {

    $(".changeToDevoured").on("click", function () {
        var id = $(this).data("id");
    var finallyDevoured = {
        devoured: 1
    };
        console.log(finallyDevoured);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: finallyDevoured
        }).then(function () {
            console.log("changed devoured to true");
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerName").val().trim(),
          devoured: 0
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            location.reload();
          }
        );
      });    
});
