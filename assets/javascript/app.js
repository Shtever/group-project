var queryURL = "https://api.ipdata.co?api-key=f754718a6a805ba8f15448bac5bf5e48e82b8c6b7b923fe91c9381eb"


var queryURL2 ="https://maps.googleapis.com/maps/api/geocode/json?address=2405+Robert+Dedman+Dr&key=AIzaSyDj2CsSJ_HaADu_VP_2Q66zI34V9hYh5EI";



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
});

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function (response) {
  console.log(response);
});


