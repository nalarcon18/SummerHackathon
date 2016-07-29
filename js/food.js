$(document).ready(function() {
   var food_names = ["Berry and ice cream shortcakes"];
   var food = food_names[Math.floor(Math.random() * food_names.length)];
   
   if (food == "") {
       var _img = document.createElement("img");
       _img.src = "";
       _img.setAttribute("height", "350");
       _img.setAttribute("Width", "225");
       $(".poster").append(_img);
       $(".header").text("");
       $(".ingredients-p").text("");
       $(".recipe-p").text("");
   } 
   else if (food == "") {
       var _img = document.createElement("img");
       _img.src = "";
       _img.setAttribute("height", "350");
       _img.setAttribute("Width", "225");
       $(".poster").append(_img);
       $(".header").text("");
       $(".recipe").text("");
   }
});