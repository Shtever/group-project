$(document).ready(function () {

    var queryURL = "https://api.ipdata.co?api-key=f754718a6a805ba8f15448bac5bf5e48e82b8c6b7b923fe91c9381eb"
    var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?address=2405+Robert+Dedman+Dr&key=AIzaSyDj2CsSJ_HaADu_VP_2Q66zI34V9hYh5EI";
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
        console.log("Longitude: " + response.longitude);

        // declare var queryURL to include lat/long results from above AJAX call
        // var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
        var queryURL2 = "https://developers.zomato.com/api/v2.1/geocode?&lat=" + lat + "&lon=" + long + "&apikey=9de42e8f38d437b717a205e52e647b2f"

        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            console.log("Zomato Restaurant API - To Generate a list of nearby restaurants based on lat/long generated above:");
            console.log(response);
            ///// Declared Variables for info to be displayed on page and push to Array

            var placeName = response.nearby_restaurants[0].restaurant.name;
            var placeImage = response.nearby_restaurants[0].restaurant.photos_url;
            var placeAddress = response.nearby_restaurants[0].restaurant.location.address;
            var placeCost = response.nearby_restaurants[0].restaurant.average_cost_for_two;

        //     randomStart()
        //     //IMAGE1//
            $(".placeInfo1").text(placeName);
            $(".placeInfo1").append(placeAddress);
            $(".placeInfo1").append(placeCost);
            
        //     randomStart()
        //     //IMAGE//
            $(".placeInfo2").text(placeName);
            $(".placeInfo2").append(placeAddress);
            $(".placeInfo2").append(placeCost);

        //     function randomStart(){
        //         for (var i = 0; i < 10; i++) {
        //             var rando = Math.floor(Math.random() * 11);
        //             placeName = response.nearby_restaurants[rando].restaurant.name;
        //             placeImage = response.nearby_restaurants[rando].restaurant.photos_url;
        //             placeAddress = response.nearby_restaurants[rando].restaurant.location.address;
        //             placeCost = response.nearby_restaurants[rando].restaurant.average_cost_for_two;
        //             console.log(rando);
        //             console.log(placeName);
        //             console.log(placeAddress);
        //             console.log(placeCost);
        //         }
        //     }
        // });

    });
});
});