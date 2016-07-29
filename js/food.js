$(document).ready(function() {
    var food_names = ["Berry and ice cream shortcakes", " Blueberry Tart", "Fresh Yogurt"];
    var food = food_names[Math.floor(Math.random() * food_names.length)];

    if (food == "Berry and ice cream shortcakes") {
        var _img = document.createElement("img");
        _img.src = "https://s-media-cache-ak0.pinimg.com/736x/18/8b/cc/188bcc320ef4cc53e390a960836d6ebb.jpg";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("Berry  and ice cream shortcakes");
        $(".ip-one").text("");
        // continue this ^^^ up until .ip-ten
        $(".ir-two").text("");
        // continue this ^^^ up until .ip-five
    }
    else if (food == "Blueberry Tart") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("Blueberry Tart");
        $(".ip-one").text("");
        $(".rp-one").text("");
    }
    else if (food == "Fresh Yogurt") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("Fresh Yogurt");
        $(".ip-one").text("");
        $(".rp-two").text("");
    }
    else { 
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("Chipotle Cheesesteak");
        $(".ip-one").text("");
        $(".rp-two").text("");
    }
});