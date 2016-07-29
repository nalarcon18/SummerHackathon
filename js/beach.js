$(document).ready(function() {
    var beach_names = ["Fort Tilden", "Jacob Riis Park Beach"];
    var beach = beach_names[Math.floor(Math.random() * beach_names.length)];
    
    if (beach == "Fort Tilden") {
        var beach1_img = document.createElement("img");
        _img.src = "https://thejunglefever.files.wordpress.com/2011/07/screen-shot-2011-07-07-at-3-36-27-pm.png";
        _img.setAttribute("height", "225");
        _img.setAttribute("width", "350");
        $("Fort Tilden").text("Fort Tilden");
        $("beach1").append(_img);
        $(".text-one").text("NYC's best-kept secret and lifeguard-free three-mile stretch of clean sand, trees and grassy dunes is so isolated that even on a summer weekend youâ€™ll get a good 50 yards of beach to yourself. Since Fort Tilden Beach is nearly inaccessible via subway or car (unless you have a fancy fishing license), we suggest biking there.");
    }
    
    else if (beach == "Jacob Riis Park Beach") {
        var beach2 = document.createElement("img");
        _img.src = "https://media.timeout.com/images/101592989/350/263/image.jpg";
        _img.setAttribute("height", "225");
        _img.setAttribute("width", "350");
        $("Jacob Riis Park Beach").text("");
        $(".poster").append(_img);
        $(".text-one").text("After years of being eclipsed by popular-kid neighbor Rockaway Beach, this expanse is enjoying a renaissance, thanks to the folks at Riis Park Beach Bazaar, which debuted last season with a packed calendar of gigs.");
    }
    
    else {
        var _img = document.createElement("img");
        _img.src = "https://media.timeout.com/images/101593051/350/263/image.jpg";
        _img.setAttribute("height", "225");
        _img.setAttribute("width", "350");
        $("Jones Beach").text("");
        $("").append(_img);
        $(".text-one").text("");
    }
})