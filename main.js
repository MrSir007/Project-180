let latitude, longitude, destination

function init_geolocation () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success)
	} else {
		alert("Sorry, your browser does not support geolocation services")
	}
}

function success (position) {
	longitude = position.coords.longitude
	latitude = position.coords.latitude

	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	})

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
		}).on("result", function (event) {
      destination = event.result.center
    })
	)

  var img1 = document.querySelector("#amber")
  var marker1 = new mapboxgl.Marker({
    element: img1
  })
  .setLngLat([75.85133, 26.98547])
  .addTo(map)

  var img2 = document.querySelector("#gateway")
  var marker2 = new mapboxgl.Marker({
    element: img2
  })
  .setLngLat([72.835163, 18.920180])
  .addTo(map)

  var img3 = document.querySelector("#gate")
  var marker3 = new mapboxgl.Marker({
    element: img3
  })
  .setLngLat([77.22931, 28.61495])
  .addTo(map)

  var img4 = document.querySelector("#lotus")
  var marker4 = new mapboxgl.Marker({
    element: img4
  })
  .setLngLat([77.25880, 28.553501])
  .addTo(map)

  var img5 = document.querySelector("#victoria")
  var marker5 = new mapboxgl.Marker({
    element: img5
  })
  .setLngLat([88.342785, 22.546170])
  .addTo(map)
}

$(document).ready(function () {
	alert("Please allow the device to access your location")
	init_geolocation()
})

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})