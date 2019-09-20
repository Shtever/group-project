var queryURL = "https://api.ipdata.co?api-key=f754718a6a805ba8f15448bac5bf5e48e82b8c6b7b923fe91c9381eb"


// Ajax call for lat/long based on user IP address //
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var lat = response.latitude
    var long = response.longitude
    console.log("IP Data API - To Generate Lat/Long from user IP:");
    console.log(response);
    console.log("Latitude: " + response.latitude);
    console.log("Longitude: " +response.longitude);

    // declare var queryURL to include lat/long results from above AJAX call
    // var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
    var queryURL2 = "https://developers.zomato.com/api/v2.1/geocode?&lat=" + lat + "&lon=" + long + "establishment_type=161&apikey=9de42e8f38d437b717a205e52e647b2f"

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        console.log("Zomato Restaurant API - To Generate a list of nearby restaurants based on lat/long generated above:");
        console.log(response)
    });
});



