



var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=2405+Robert+Dedman+Dr&key=AIzaSyDj2CsSJ_HaADu_VP_2Q66zI34V9hYh5EI";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
  