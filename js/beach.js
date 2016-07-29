$(document).ready(function() {
    var beach_names = ["Fort Tilden", "Jacob Riis Park Beach"];
    var beach = beach_names[Math.floor(Math.random() * beach_names.length)];
    
    if (beach == "Fort Tilden") {
        var beach1_img = document.createElement("img");
        beach1_img.src = "https://thejunglefever.files.wordpress.com/2011/07/screen-shot-2011-07-07-at-3-36-27-pm.png";
        beach1_img.setAttribute("height", "225");
        beach1_img.setAttribute("width", "350");
        $(".beach_name").text("Fort Tilden");
        $(".poster").append(beach1_img);
        $(".text-one").text("NYC's best-kept secret and lifeguard-free three-mile stretch of clean sand, trees and grassy dunes is so isolated that even on a summer weekend you'll get a good 50 yards of beach to yourself. Since Fort Tilden Beach is nearly inaccessible via subway or car (unless you have a fancy fishing license), we suggest biking there.");
    }
    
    else if (beach == "Jacob Riis Park Beach") {
        var beach2_img = document.createElement("img");
        beach2_img.src = "https://media.timeout.com/images/101592989/350/263/image.jpg";
        beach2_img.setAttribute("height", "225");
        beach2_img.setAttribute("width", "350");
        $(".beach_name").text("Jacob Riis Park Beach");
        $(".poster").append(beach2_img);
        $(".text-one").text("After years of being eclipsed by popular-kid neighbor Rockaway Beach, this expanse is enjoying a renaissance, thanks to the folks at Riis Park Beach Bazaar, which debuted last season with a packed calendar of gigs.");
    }
    
    else {
        var beach3_img = document.createElement("img");
        beach3_img.src = "https://media.timeout.com/images/101593051/350/263/image.jpg";
        beach3_img.setAttribute("height", "225");
        beach3_img.setAttribute("width", "350");
        $(".beach_name").text("Jones Beach");
        $(".poster").append(beach3_img);
        $(".text-one").text("This massive six-mile expanse on Long Island is a well-manicured sandy oasis ideal for familiesâ€”thereâ€™s minigolf, ball courts and even a swimming poolâ€”and music fiends: Nikon at Jones Beach Theater sees big names like Gwen Stefani and Dave Matthews every summer.");
    }
})