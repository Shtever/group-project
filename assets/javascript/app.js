var placeArray = [];

console.log(placeArray);


$(document).ready(function () {
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
        console.log("Longitude: " + response.longitude);

        // declare var queryURL to include lat/long results from above AJAX call
        // var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
        var queryURL2 = "https://developers.zomato.com/api/v2.1/geocode?&lat=" + lat + "&lon=" + long + "&count=20&apikey=9de42e8f38d437b717a205e52e647b2f"

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

                // create cards
                function createCard() {

                    var cardDiv = $("<div class='card'>");
                    var cardImg = $("<img class='card-img-top cardImg'>");
                    var cardBody = $("<div class= 'card-body'>");
                    var cardTitle = $("<h4 class= 'card-title'>");
                    var cardText = $("<a class='card-text' target='_blank'>");
                    var cardList = $("<ul class= 'list-group list-group-flush'>");
                    var cardInfo = $("<li class= 'list-group-item'>");

                    $(".card-group").append(cardDiv);
                    $(cardDiv).append(cardBody);
                    $(cardDiv).append(cardTitle);
                    $(cardDiv).append(cardImg);
                    $(cardDiv).append(cardList);
                    $(cardList).append(cardInfo);
                    $(cardDiv).append(cardText);



                    $(cardImg).attr("src", randArray.image);
                    $(cardTitle).text(randArray.name);
                    $(cardText).text(randArray.address);
                    $(cardText).attr("href", "https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=" + placeObject.address);
                    $(cardInfo).text("Type: " + randArray.type);

                }

                function createCard2() {
                    if (randArray === randArray2) {
                        console.log("REROLL")
                        randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
                        console.log(randArray2);

                        // For future deployment, prepend card rather than replace text.
                    } else {
                        var cardDiv = $("<div class='card'>");
                        var cardImg = $("<img class='card-img-top'>");
                        var cardBody = $("<div class= 'card-body'>");
                        var cardTitle = $("<h4 class= 'card-title'>");
                        var cardText = $("<a class='card-text' target='_blank'>");
                        var cardList = $("<ul class= 'list-group list-group-flush'>");
                        var cardInfo = $("<li class= 'list-group-item'>");

                        $(".card-group").append(cardDiv);
                        $(cardDiv).append(cardBody);
                        $(cardDiv).append(cardTitle);
                        $(cardDiv).append(cardImg);
                        $(cardDiv).append(cardList);
                        $(cardList).append(cardInfo);
                        $(cardDiv).append(cardText);



                        $(cardImg).attr("src", randArray2.image);
                        $(cardTitle).text(randArray2.name);
                        $(cardText).text(randArray2.address);
                        $(cardText).attr("href", "https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=" + placeObject.address);
                        $(cardInfo).text("Type: " + randArray2.type);
                    }

                    ;

                }



                createCard();
                createCard2();

                var clicks = 0;
                $(".btn").click(function (event) {
                    event.preventDefault();
                    $(".card-group").empty();
                    start();

                if (clicks % 3) {
                    $("myModal");
                }
                });
            }
        });
    });
});

//function to populate more choices when button is clicked//


function moreChoices() {
    console.log("Button Clicked!");
    var randArray = placeArray[Math.floor(Math.random() * placeArray.length)];
    console.log(randArray);

    var randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
    console.log(randArray2);
}

