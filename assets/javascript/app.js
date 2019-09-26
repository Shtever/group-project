var placeArray = [];
var count = 0;

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
        console.log("Latitude: " + response.latitude);
        console.log("Longitude: " + response.longitude);

        // declare var queryURL to include lat/long results from above AJAX call
        // var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCrdiVhj7Un_ACNVqMw9dozHxGNVglpwmo";
        // var queryURL2 = "https://developers.zomato.com/api/v2.1/geocode?&lat=" + lat + "&lon=" + long + "&count=20&apikey=9de42e8f38d437b717a205e52e647b2f"
        var queryURL2 = "https://developers.zomato.com/api/v2.1/search?count=20&lat=" + lat + "&lon=" + long + "&apikey=9de42e8f38d437b717a205e52e647b2f"
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            console.log("Zomato Restaurant API - To Generate a list of nearby restaurants based on lat/long generated above:");
            console.log(response);


            // Displays restaurants on page
            for (var i = 0; i < response.restaurants.length; i++) {

                var placeObject = {
                    name: response.restaurants[i].restaurant.name,
                    image: response.restaurants[i].restaurant.thumb,
                    address: response.restaurants[i].restaurant.location.address,
                    cost: response.restaurants[i].restaurant.average_cost_for_two,
                    type: response.restaurants[i].restaurant.cuisines,
                    rating: response.restaurants[i].restaurant.user_rating.aggregate_rating,
                    cost: response.restaurants[i].restaurant.average_cost_for_two
                };
                placeArray.push(placeObject);
            }
            start()


            //select the random array
            function start() {
                var randArray = placeArray[Math.floor(Math.random() * placeArray.length)];
                var randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
                createCard();
                createCard2();
                console.log(randArray.name, "/", randArray2.name);

                // create cards
                function createCard() {

                    var cardDiv = $("<div class='card'>");
                    var cardImg = $("<img class='card-img-top cardImg'>");
                    var cardBody = $("<div class= 'card-body'>");
                    var cardTitle = $("<h4 class= 'card-title'>");
                    var cardText = $("<a class='card-text button' target='_blank'>");
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
                    $(cardText).text("Take Me There!");
                    $(cardText).attr("href", "https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=" + placeObject.address);
                    $(cardInfo).text("Type: " + randArray.type);
                    $(cardInfo).append("<br>Rating: " + randArray.rating + "/5");
                    $(cardInfo).append("<br>Avg cost for 2: $" + randArray.cost);
                };

                function createCard2() {
                    if (randArray === randArray2) {
                        console.log("REROLL")
                        randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
                        createCard2();

                        // For future deployment, prepend card rather than replace text.
                    } else {
                        var cardDiv = $("<div class='card'>");
                        var cardImg = $("<img class='card-img-top'>");
                        var cardBody = $("<div class= 'card-body'>");
                        var cardTitle = $("<h4 class= 'card-title'>");
                        var cardText = $("<a class='card-text button' target='_blank'>");
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
                        $(cardText).text("Take Me There!");
                        $(cardText).attr("href", "https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=" + placeObject.address);
                        $(cardInfo).text("Type: " + randArray2.type);
                        $(cardInfo).append("<br>Rating: " + randArray.rating + "/5");
                        $(cardInfo).append("<br>Avg cost for 2: $" + randArray.cost);
                    };
                };
                $("#myModal").attr("style", "display:none");

            }
            $(".btn").click(function (event) {
                event.preventDefault();
                $(".card-group").empty();
                count++;
                console.log(count);
                $(".btn").click(function () {
                    if (count >= 3) {
                        count = 0;
                        modalShow();
                    }
                });




                start();
            });
            function modalShow() {
                console.log("modal");

                var modalID = $("<div id='myModal' class ='modal fade'>")
                var modalDiv = $("<div class='modal-dialog'>");
                var modalDiv2 = $("<div class='modal-content'>");
                var modalDiv3 = $("<div class='modal-body'>");
                var modalButton = $("<button class='close'>");
                var modalImg = $("<img class='modal-img-top'>");
                modalImg.attr("src", "https://media.giphy.com/media/GDqDZOPSZJC00/giphy.gif")

                $("#modal1").html(modalID);
                $("#myModal").css("display", "");
                $("#myModal").html(modalDiv);
                $(".modal-dialog").html(modalDiv2);
                $(".modal-content").html(modalDiv3);
                $(".modal-body").html(modalButton);
                $(".modal-body").html(modalImg)
            };

            function modalHide() {
            }
        });
    });
});

// <!-- <div id="myModal" class="modal fade" role="dialog">
// <div class="modal-dialog">
//     <div class="modal-content">
//         <div class="modal-body">
//         <button type="button" class="close" data-dismiss="modal">&times;</button>
//         <img src="https://media.giphy.com/media/GDqDZOPSZJC00/giphy.gif">
//         </div>
//     </div>
// </div>
// </div> -->




//function to populate more choices when button is clicked//
// function moreChoices() {
//     console.log("Button Clicked!");
//     var randArray = placeArray[Math.floor(Math.random() * placeArray.length)];
//     console.log(randArray[i]);
//     var randArray2 = placeArray[Math.floor(Math.random() * placeArray.length)];
//     console.log(randArray2[i]);
// }