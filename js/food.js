$(document).ready(function() {
    var food_names = ["Berry and ice cream shortcakes", " Blueberry Tart", "Fresh Yogurt"];
    var food = food_names[Math.floor(Math.random() * food_names.length)];

    if (food == "Berry and ice cream shortcakes") {
        var berry_img = document.createElement("img");
        berry_img.src = "https://s-media-cache-ak0.pinimg.com/736x/18/8b/cc/188bcc320ef4cc53e390a960836d6ebb.jpg";
        berry_img.setAttribute("height", "350");
        berry_img.setAttribute("Width", "225");
        $(".poster").append(berry_img);
        $(".header").text("Berry and Ice Cream Shortcakes");
        $(".ip-one").text("Raspberries");
        $(".ip-two").text("Blueberries");
        $(".ip-three").text("sugar");
        $(".ip-four").text("orange juice");
        $(".ip-five").text("biscuits");
        $(".ip-six").text("vanilla ice cream");
        // continue this ^^^ up until .ip-ten
        $(".rp-one").text("");
        // continue this ^^^ up until .ip-five
    }
    else if (food == "Blueberry Tart") {
        var blue_img = document.createElement("img");
        blue_img.src = "";
        blue_img.setAttribute("height", "350");
        blue_img.setAttribute("Width", "225");
        $(".poster").append(blue_img);
        $(".header").text("Blueberry Tart");
        $(".ip-one").text("flour");
        $(".ip-two").text(" frozen puff pastry");
        $(".ip-three").text("eggs");
        $(".ip-four").text("granulated sugar");
        $(".ip-five").text("cream cheese");
        $(".ip-six").text("heavy cream");
        $(".ip-seven").text("grated lemon zest");
        $(".ip-eight").text(" confectioners' sugar");
        $(".ip-nine").text("blueberries");
        $(".rp-one").text("");
    }
    else if (food == "Fresh Yogurt") {
        var yogurt_img = document.createElement("img");
        yogurt_img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(yogurt_img);
        $(".header").text("Fresh Yogurt");
        $(".ip-one").text(" saucepan");
         $(".ip-two").text("eggs");
         
        $(".rp-one").text("");
    }
    else { chipotle cheesesteak
        var chipotle _img = document.createElement("img");
        chipotle_img.src = "";
        chipotle_img.setAttribute("height", "350");
        chipotle_img.setAttribute("Width", "225");
        $(".poster").append(chipotle_img);
        $(".header").text("Chipotle Cheesesteak");
        $(".ip-one").text("");
        $(".rp-one").text("");
    }
});