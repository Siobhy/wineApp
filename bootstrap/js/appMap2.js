// Individual Country Map

var map2;

$(document).ready(function() {

//Create a new map instance

var map2 = new GMaps({
	div: "#map2",
	zoom:15,
	lat: -12.043333,
    lng: -77.028333
});

//Make an ajax call to get all wines from DB, loop through these wines and call function getCountryCoords()

$.ajax({
	url:"http://daretodiscover.net/wine/1", // add after wine/1 wine id #
	type:"GET",
	success:function(data) {

		//Loop through all wines that are returned and give country over to getCountryCoords function

		
			getCountryCoords(data["country"]);
	
	},
	error:function() {
		alert("Something went wrong...");
	}
});

//Function to get latitude and longitude of a particular country and set overlays

function getCountryCoords(country) {
	$.ajax({
		url:"https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + encodeURIComponent(country),
		type:"GET",
		success:function(data) {

			//Call drawOverlay function from Gmaps.js to create an overlay for each country

			map.drawOverlay({
				lat: data.results[0].geometry.location.lat,
				lng: data.results[0].geometry.location.lng,
				content: '<div class="overlay">' + country + '<div class="overlay_arrow above"></div></div>'
			});
		}
	});
}

});