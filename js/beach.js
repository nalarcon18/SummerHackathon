$(document).ready(function() {
    var beach_names = ["Fort Tilden", "Jacob Riis Park Beach"];
    var beach = beach_names[Math.floor(Math.random() * beach_names.length)];
    
    if (beach == "") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "225");
        _img.setAttribute("width", "350");
        $(".beach_name").text("");
        $(".poster").append(_img);
        $(".text-one").text("");
    }
    
    else if (beach == "") {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "225");
        _img.setAttribute("width", "350");
        $(".beach_name").text("");
        $(".poster").append(_img);
        $(".text-one").text("");
    }
    
    else {
        var _img = document.createElement("img");
        _img.src = "";
        _img.setAttribute("height", "225");
        _img.setAttribute("width", "350");
        $(".beach_name").text("");
        $(".poster").append(_img);
        $(".text-one").text("");
    }
})