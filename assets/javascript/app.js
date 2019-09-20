//
// https://developers.zomato.com/api/v2.1/cities?q=Austin&apikey=9de42e8f38d437b717a205e52e647b2f
// *** USE GOOGLE API TO GEOLOCATE BASED ON LATITUDE/LONGITUDE

// restaurant name
// **** city/loacation
var location = "austin"
// hours
// **** cuisine type
var cuisineType = "" 
// **** price range 
var price = ""
// **** meal type (breakfast/lunch/dinner)
var mealType = ""
// view menu
// review score
// featured tags

var queryUrl = "https://developers.zomato.com/api/v2.1/cities?q=" + location + "&apikey=9de42e8f38d437b717a205e52e647b2f"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})