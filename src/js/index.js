import $ from 'jquery';



var mapboxAccessToken = {pk.eyJ1IjoiYnJpdHRhbnlhbmRyZXdzIiwiYSI6ImNpbTZsMm0weTAyaG51Mm00aGdpYm4xOTIifQ.qhTRY7ANO3U012XH56GNkA};
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: ...
}).addTo(map);

L.geoJson(statesData).addTo(map);