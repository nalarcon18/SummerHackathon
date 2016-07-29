$(document).ready(function() {
    var food_names = ["Berry and ice cream shortcakes", " Blueberry Tart", "Fresh Yogurt"];
    var food = food_names[Math.floor(Math.random() * food_names.length)];

    if (food == "Berry and ice cream shortcakes") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("");
        $(".ip-one").text("");
        // continue this ^^^ up until .ip-ten
        $(".ir-two").text("");
        // continue this ^^^ up until .ip-five
    }
    else if (food == "") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("");
        $(".ip-one").text("");
        $(".rp-one").text("");
    }
    else if (food == "") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("");
        $(".ip-one").text("");
        $(".rp-two").text("");
    }
    else {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(_img);
        $(".header").text("");
        $(".ip-one").text("");
        $(".rp-two").text("");
    }
});