<<<<<<< HEAD
//
// https://developers.zomato.com/api/v2.1/cities?q=Austin&apikey=9de42e8f38d437b717a205e52e647b2f
// //==========================================zomatoAPI==================================//
// // restaurant name
// // **** city/loacation
// var location = "austin"
// // hours
// // **** cuisine type
// var cuisineType = "" 
// // **** price range 
// var price = ""
// // **** meal type (breakfast/lunch/dinner)
// var mealType = ""
// // view menu
// // review score
// // featured tags
// var queryUrl = "https://developers.zomato.com/api/v2.1/cities?q=" + location + "&apikey=9de42e8f38d437b717a205e52e647b2f"
// //==========================================zomatoAPI==================================//


// *** USE GOOGLE API TO GEOLOCATE BASED ON LATITUDE/LONGITUDE
var queryURL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})
=======




var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=2405+Robert+Dedman+Dr&key=AIzaSyDj2CsSJ_HaADu_VP_2Q66zI34V9hYh5EI";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
  
>>>>>>> master
