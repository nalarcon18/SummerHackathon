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
        $(".rp-one").text("In a bowl, toss 1 cup raspberries and 1 cup blueberries with 2 tablespoons sugar and 2 tablespoons orange juice; let sit for 5 minutes.
Dividing evenly, serve 4 split biscuits with 1 pint vanilla ice cream and the berry mixture");
    }
    else if (food == "Fresh Yogurt") {
        var yogurt_img = document.createElement("img");
        yogurt_img.src = "";
        _img.setAttribute("height", "350");
        _img.setAttribute("Width", "225");
        $(".poster").append(yogurt_img);
        $(".header").text("Fresh Yogurt");
        $(".ip-one").text("milk");
        $(".ip-two").text("powdered milk");
        $(".ip-three").text("sugar");
        $(".ip-four").text("plain yogurt"); 
        $(".rp-one").text("Pour the milk into a small saucepan and whisk in the powdered milk and honey. Place over medium heat and bring to 120 degrees F on an instant-read thermometer. Once the milk has reached has reached the target temperature, pour it into a cylindrical plastic container, reserving 1/2 cup. Whisk the reserved milk into the yogurt and add it back to the milk mixture.
Place the container into a narrow wine bucket lined with a heating pad. Set the heating pad to medium. Let the mixture ferment for 3 to 12 hours, making sure the temperature stays as close to 115 degrees F as possible.
After the fermentation is complete, refrigerate overnight.

Read more at: http://www.foodnetwork.com/recipes/fresh-yogurt-recipe.html?oc=linkback");
    }
    else { chipotle cheesesteak
        var chipotle _img = document.createElement("img");
        chipotle_img.src = "";
        chipotle_img.setAttribute("height", "350");
        chipotle_img.setAttribute("Width", "225");
        $(".poster").append(chipotle_img);
        $(".header").text("Chipotle Cheesesteak");
        $(".ip-one").text("vegetable oil");
        $(".ip-two").text("pepper-and-onion mixture");
        $(".ip-three").text("unsalted butter");
        $(".ip-four").text("all-purpose flour");
        $(".ip-five").text("warm milk");
        $(".ip-six").text("ground black pepper");
        $(".ip-seven").text("cheddar cheese");
        $(".ip-eight").text(" chopped chipotle peppers in abodo sauce");
        $(".ip-nine").text("abodo sauce");
        $(".ip-ten").text("loaf baguette");
        $(".rp-one").text("");
    }
});