var placeArray = [];

console.log(placeArray);


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


            // Displays restaurants on page


            for (var i = 0; i < response.nearby_restaurants.length; i++) {


                var placeObject = {
                    name: response.nearby_restaurants[i].restaurant.name,
                    image: response.nearby_restaurants[i].restaurant.thumb,
                    address: response.nearby_restaurants[i].restaurant.location.address,
                    cost: response.nearby_restaurants[i].restaurant.average_cost_for_two,
                    type: response.nearby_restaurants[i].restaurant.cuisines,
                };
                placeArray.push(placeObject);

            }
            start()


            //select the random array
            function start() {
                var randArray = placeArray[Math.floor(Math.random() * placeArray.length)];
                console.log(randArray)

                var randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
                console.log(randArray2)

                //add random restaurant to page 

                $(".placeName").text(randArray.name);
                $(".placeAddress").text(randArray.address);

                $(".placeName2").text(randArray2.name);
                $(".placeAddress2").text(randArray2.address);
            }
        });
    });
});

//function to populate more choices when button is clicked//
$("#button").click(function(){
    event.preventDefault();
    moreChoices();
});

function moreChoices() {
    console.log("Button Clicked!");
    var randArray = placeArray[Math.floor(Math.random() * placeArray.length)];
    console.log(randArray);

    var randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
    console.log(randArray2);



    if(randArray === randArray2){
        console.log("REROLL")
        randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
        console.log(randArray2);
    
        // For suture deployment, prepend card rather than replace text.
    } else {
        $(".placeName").text(randArray.name);
        $(".placeAddress").text(randArray.address);
    
        $(".placeName2").text(randArray2.name);
        $(".placeAddress2").text(randArray2.address);
    }


}