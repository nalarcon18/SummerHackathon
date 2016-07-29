$(document).ready(function() {
    var movie_titles = ["Star Trek Beyond", "Ghostbusters", "Jason Borne", "Nerve", "Secret Life of Pets", "BFG"];
    var coming_movie_titles = ["Suicide Sqaud", "Moana", "Doctor Strange", "Fantastical Beasts and Where to Find Them", "Pete´ s Dragon"];
    var movie = movie_titles[Math.floor(Math.random() * movie_titles.length)];
    var coming_title = coming_movie_titles[Math.floor(Math.random() * coming_movie_titles.length)];
    // console.log(movie);
    // console.log(coming_title);
    if (movie == "Star Trek Beyond") {
        var star_trek_img = document.createElement("img");
        star_trek_img.src = "http://static1.squarespace.com/static/53323bb4e4b0cebc6a28ffa2/t/573fe299f8baf3f38def74ec/1463804606303/Star+Trek+Beyond+Poster?format=2500w";
        star_trek_img.setAttribute("height", "350");
        star_trek_img.setAttribute("width", "225");
        $(".poster").append(star_trek_img);
        $(".header-one").text("Star Trek Beyond");
        $(".p-one").text("A surprise attack in outer space forces the Enterprise to crash-land on a mysterious world. The assault came from Krall (Idris Elba), a lizard-like dictator who derives his energy by sucking the life out of his victims. Krall needs an ancient and valuable artifact that's aboard the badly damaged starship. Left stranded in a rugged wilderness, Kirk (Chris Pine), Spock (Zachary Quinto) and the rest of the crew must now battle a deadly alien race while trying to find a way off their hostile planet.");
        // Video: http://stackoverflow.com/questions/20277181/adding-a-video-to-div-using-javascript
        // Live video: http://plnkr.co/edit/CVmTaK4XGm6EvQdwzbcc?p=preview
        // var iframe = document.createElement('iframe');
        // iframe.src = 'http://www.youtube.com/embed/9kd-PoHWah8';
        // iframe.width = '560';
        // iframe.height = '315';
        // var bottom = $(".video-player");
        // bottom.append(iframe);
    }
    else if (movie == "Ghostbusters") {
        var ghostbuster_img = document.createElement("img");
        ghostbuster_img.src = "http://t3.gstatic.com/images?q=tbn:ANd9GcQu6t289OZIOlPWU_AkeaL-3-kb2AywKUACnXSer1g_-pcpi0mi";
        ghostbuster_img.setAttribute("height", "350");
        ghostbuster_img.setAttribute("width", "225");
        $(".poster").append(ghostbuster_img);
        $(".header-one").text("Ghostbusters");
        $(".p-one").text("Paranormal researcher Abby Yates (Melissa McCarthy) and physicist Erin Gilbert are trying to prove that ghosts exist in modern society. When strange apparitions appear in Manhattan, Gilbert and Yates turn to engineer Jillian Holtzmann for help. Also joining the team is Patty Tolan, a lifelong New Yorker who knows the city inside and out. Armed with proton packs and plenty of attitude, the four women prepare for an epic battle as more than 1,000 mischievous ghouls descend on Times Square.");
    }
    else if (movie == "Jason Borne") {
        var jason_borne_img = document.createElement("img");
        jason_borne_img.src = "http://www.joblo.com/timthumb.php?src=/posters/images/full/jason-bourne-poster-A.jpg&h=600&q=100"
        jason_borne_img.setAttribute("height", "350");
        jason_borne_img.setAttribute("width", "225");
        $(".poster").append(jason_borne_img);
        $(".header-one").text("Jason Bourne");
        $(".p-one").text("It's been 10 years since Jason Bourne (Matt Damon) walked away from the agency that trained him to become a deadly weapon. Hoping to draw him out of the shadows, CIA director Robert Dewey assigns hacker and counterinsurgency expert Heather Lee to find him. Lee suspects that former operative Nicky Parsons is also looking for him. As she begins tracking the duo, Bourne finds himself back in action battling a sinister network that utilizes terror and technology to maintain unchecked power.");
    }
    else if (movie == "Nerve") {
        var nerve_img = document.createElement("img");
        nerve_img.src = "http://t1.gstatic.com/images?q=tbn:ANd9GcQrjKYu3owroaaA_CCJuF7Ufn34kVVseBvm4rmz0ocAAt7gdJwZ";
        nerve_img.setAttribute("height", "350");
        nerve_img.setAttribute("width", "225");
        $(".poster").append(nerve_img);
        $(".header-one").text("Nerve");
        $(".p-one").text("Industrious high school senior Vee Delmonico (Emma Roberts) is tired of living life on the sidelines. Pressured by her friends, Vee decides to join Nerve, a popular online game that challenges players to accept a series of dares. It's not long before the adrenaline-fueled competition requires her to perform increasingly dangerous stunts. When Nerve begins to take a sinister turn, Vee finds herself in a high-stakes finale that will ultimately determine her entire future.");
    }
    else if (movie == "Secret Life of Pets") {
        var life_of_pets_img = document.createElement("img");
        life_of_pets_img.src = "https://upload.wikimedia.org/wikipedia/en/6/64/The_Secret_Life_of_Pets_poster.jpg";
        life_of_pets_img.setAttribute("height", "350");
        life_of_pets_img.setAttribute("width", "225");
        $(".poster").append(life_of_pets_img);
        $(".header-one").text("Secret Life of Pets");
        $(".p-one").text("Max (Louis C.K.) is a spoiled terrier who enjoys a comfortable life in a New York building until his owner adopts Duke, a giant and unruly canine. During their walk outside, they encounter a group of ferocious alley cats and wind up in a truck that's bound for the pound. Luckily, a rebellious bunny named Snowball swoops in to save the doggy duo from captivity. In exchange, Snowball demands that Max and Duke join his gang of abandoned pets on a mission against the humans who've done them wrong.");
    }
    else if (movie == "BFG") {
        var the_bfg_img = document.createElement("img");
        the_bfg_img.src = "http://t0.gstatic.com/images?q=tbn:ANd9GcQozIgpFTI7eAmi16av-piJo9D34XhErw4X0zTSGj5z8gqF0egv";
        the_bfg_img.setAttribute("height", "350");
        the_bfg_img.setAttribute("width", "225");
        $(".poster").append(the_bfg_img);
        $(".header-one").text("The BFG");
        $(".p-one").text("Ten-year-old Sophie is in for the adventure of a lifetime when she meets the Big Friendly Giant (Mark Rylance). Naturally scared at first, the young girl soon realizes that the 24-foot behemoth is actually quite gentle and charming. As their friendship grows, Sophie's presence attracts the unwanted attention of Bloodbottler, Fleshlumpeater and other giants. After traveling to London, Sophie and the BFG must convince Queen Victoria to help them get rid of all the bad giants once and for all.");
    }
    else {
        var finding_dory_img = document.createElement("img");
        finding_dory_img.src = "http://t1.gstatic.com/images?q=tbn:ANd9GcTPxyoxzLf33_chM3uqooaT3tiyEBbQmqJb0Ndbvpt6qfQ4ybIk";
        finding_dory_img.setAttribute("height", "350");
        finding_dory_img.setAttribute("width", "225");
        $(".poster").append(finding_dory_img);
        $(".header-one").text("Finding Dory");
        $(".p-one").text("Dory (Ellen DeGeneres) is a wide-eyed, blue tang fish who suffers from memory loss every 10 seconds or so. The one thing she can remember is that she somehow became separated from her parents as a child. With help from her friends Nemo and Marlin, Dory embarks on an epic adventure to find them. Her journey brings her to the Marine Life Institute, a conservatory that houses diverse ocean species. Dory now knows that her family reunion will only happen if she can save mom and dad from captivity.");
    }

    // console.log(coming_titltesttttttttttte);
function coming (coming_title) {    if (coming_title == "Suicide Squad") {
        var suicide_squad_img = document.createElement("img");
        suicide_squad_img.src = "http://www.gstatic.com/tv/thumb/movieposters/11319046/p11319046_p_v8_af.jpg";
        suicide_squad_img.setAttribute("height", "350");
        suicide_squad_img.setAttribute("width", "225");
        $(".poster-two").append(suicide_squad_img);
        $(".header-two").text("Suicide Squad");
        $(".p-two").text("Intelligence officer Amanda Waller (Viola Davis) decides to assemble a team of dangerous, incarcerated supervillains for a top-secret mission. Figuring it has nothing to lose, the U.S. government supplies weapons to Deadshot (Will Smith), Harley Quinn (Margot Robbie), Captain Boomerang (Jai Courtney) and other despicable inmates. Dubbed the Suicide Squad, the united criminals must defeat a mysterious and powerful entity while contending with the antics of the diabolical Joker (Jared Leto).");
    }
    else if (coming_title == "Moana") {
        var moana_img = document.createElement("img");
        moana_img.src = "http://ia.media-imdb.com/images/M/MV5BNDU1MTQzODAyM15BMl5BanBnXkFtZTgwNjE5ODIxOTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg";
        moana_img.setAttribute("height", "350");
        moana_img.setInterval("width", "225");
        $(".poster-two").append(moana_img);
        $(".header-two").text("Moana");
        $(".p-two").text("A young woman uses her navigational talents to set sail for a fabled island. Joining her on the adventure is her hero, the legendary demi-god Maui.");
    }
    else if (coming_title == "Doctor Strange") {
        var doctor_strange_img = document.createElement("img");
        doctor_strange_img = "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg";
        doctor_strange_img.setAttribute("height", "350");
        doctor_strange_img.setAttribute("width", "225");
        $(".poster-two").append(doctor_strange_img);
        $(".header-two").text("Doctor Strange");
        $(".p-two").text("After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.");
    }
    else if (coming_title == "Fantastical Beasts and Where to Find Them") {
        var fantastical_beasts_img = document.createElement("img");
        fantastical_beasts_img = "http://ia.media-imdb.com/images/M/MV5BMjQyMzIyMTY5NF5BMl5BanBnXkFtZTgwMDA0Mjk0NzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg";
        doctor_strange_img.setAttribute("height", "350");
        doctor_strange_img.setAttribute("width", "225");
        $(".poster-two").append(fantastical_beasts_img);
        $(".header-two").text("Fantastic Beasts and Where to Find Them");
        $(".p-two").text("Magizoologist Newt Scamander (Eddie Redmayne) must track down an array of magical creatures in 1926 New York.");
    }
    else if (coming_title == "Pete's Dragon") {
        var petes_dragon_img = document.createElement("img");
        petes_dragon_img = "http://ia.media-imdb.com/images/M/MV5BMjE5MjIwNTMxMF5BMl5BanBnXkFtZTgwNTA1MDcxOTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg";
        petes_dragon_img.setAttribute("height", "350");
        petes_dragon_img.setAttribute("width", "225");
        $(".poster-two").append(petes_dragon_img);
        $(".header-two").text("Pete's Dragon");
        $(".p-two").text("Mr. Meacham (Robert Redford), a woodcarver, delights local children with stories of a mysterious dragon that lives deep in the woods of the Pacific Northwest. His daughter Grace (Bryce Dallas Howard) believes these are just tall tales, until she meets Pete (Oakes Fegley), a 10-year-old orphan who says he lives in the woods with a giant, friendly dragon. With help from a young girl named Natalie (Oona Laurence), Grace sets out to investigate if this fantastic claim can be true.");
    }
    else {
        var kubo_img = document.createElement("img");
        kubo_img = "http://ia.media-imdb.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SY1000_SX675_AL_.jpg";
        kubo_img.setAttribute("height", "350");
        kubo_img.setAttribute("width", "225");
        $(".poster-two").append(kubo_img);
        $(".header-two").text("Kubo and the Two Strings");
        $(".p-two").text("Young Kubo's (Art Parkinson) peaceful existence comes crashing down when he accidentally summons a vengeful spirit from the past. Now on the run, Kubo joins forces with Monkey (Charlize Theron) and Beetle (Matthew McConaughey) to unlock a secret legacy. Armed with a magical instrument, Kubo must battle the Moon King (Ralph Fiennes) and other gods and monsters to save his family and solve the mystery of his fallen father, the greatest samurai warrior the world has ever known.");
    }
}

console.log(coming_title);
coming(coming_title);
});
