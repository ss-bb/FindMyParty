
if (navigator.geolocation){
		var watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, {enableHighAccuracy:true});
}

function successCallback(position){
	console.log("Latitude : " + position.coords.latitude + ", longitude : " + position.coords.longitude);
	geocodeLatLng(position.coords.latitude,position.coords.longitude);
	stopWatch();
};  

function errorCallback(error){
	switch(error.code){
		case error.PERMISSION_DENIED:
		$('#localisation').text("pas autorisé l'accès à sa position");
		break;      
		case error.POSITION_UNAVAILABLE:
		$('#localisation').text("L'emplacement n'a pas pu être déterminé");
		break;
		case error.TIMEOUT:
		$('#localisation').text("time out");
		break;
	}
};

function stopWatch(){
	navigator.geolocation.clearWatch(watchId);
}

function geocodeLatLng(latitude,longitude) {
	var geocoder = new google.maps.Geocoder;
	var latlng = {lat:latitude , lng:longitude };
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			if (results[1]) {
				console.log(results[1]);
				console.log(results[1].formatted_address);
				$('#localisation').text(results[1].formatted_address);
			} else {
				$('#localisation').text('Ville introuvable');
			}
		} else {
			$('#localisation').text('Reporter a Olivier le probleme suivant : ' + status);
		}
	});
}