// Yummly API = https://api.yummly.com/v1/api/recipes?_app_id=4e9f2aa0%26&_app_key=e54e9cfa05d58b64bab7da2301f05c0b&q=#{input.sample}
// OMDB API = http://www.omdbapi.com/
// FourSquare API = var clientId = 'EQ124X2XB55O5STAT323FYVCLS3N1XOSGT50AWFSYLXHUZ4H';
//                     var clientSecret = 'MNA04GQN1IYIP3ZRKBPYHXQKA42UKXPENUJ1NYLIFNY3J04Z';
// Soundcloud API = client_id: '7fd2715456d322ce77c136b25dab3d3d'

// var movie_key = ["summer", "city", "love", "music", ];
// var movie_value = movie_key[Math.floor(Math.random()*items.length)];
// var $Form = $('form')
// $Form.on('submit', function(movie){
//     var sUrl, sMovie, oData;
//     movie.preventDefault();
//     movies_id = $Form.find('input').val();
//     sUrl = 'https://www.omdbapi.com/?t=' + movies_id + '&type=movie&tomatoes=true'
//     $.ajax(sUrl, {
//         complete: function(p_oXHR, p_sStatus){
//             oData = $.parseJSON(p_oXHR.responseText);
//             console.log(oData);
//             $Container.find('.title').text(oData.Title);
//             $Container.find('.plot').text(oData.Plot);
//             $Container.find('.poster').html('<img src="' + oData.Poster + '"/>');
//             $Container.find('.year').text(oData.Year);
//             $Container.show();
//         }
