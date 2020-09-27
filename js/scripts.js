//console.log('JS is loaded');

function initMap() {
	var Atlantic = {lat: 29.614, lng: -17.2};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2.75,
		center: Atlantic,
		disableDefaultUI: true,
		styles: [
			//Future Toggles
			{
				featureType: 'road',
				elementType: 'all',
				stylers: [{visibility: 'off'}],
			},

			//End toggles

			{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
			{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
			{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}],
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}],
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#263c3f'}],
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#6b9a76'}],
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#38414e'}],
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{color: '#212a37'}],
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9ca5b3'}],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#746855'}],
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{color: '#1f2835'}],
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#f3d19c'}],
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{color: '#2f3948'}],
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}],
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#17263c'}],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#515c6d'}],
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{color: '#17263c'}],
			},
		],
	});
}

//Slides

$('.example').split({
	theme:
		'bottom-to-top-fade-out,bottom-to-top-zoom-in,bottom-to-top-fade-out,fade-in-out,fade-in-out',
	delay: '50',
	height: '600',
	infinite: 'true',
});

$('#define1').mousefollow({
	html:
		'<div class="pop-up"><div id="pop-img-1"></div><p>Created in part by all the types listed below, skyglow is most common in urban areas where light reflects off of surfaces or is emitted towards the sky. It is scattered by the atmosphere, creating a dim glow and hiding the stars. This is the same process that causes the sky to be blue and stars invisible during the day.</p></div>',
});

$('#define2').mousefollow({
	html:
		'<div class="pop-up"><div id="pop-img-2"></div><p>Glare occurs when a light source in your field of view is significantly brighter than what your eyes have adjusted for. This causes dim objects to be less visible, which can affect astronomers as well as driver safety.</p></div>',
});

$('#define3').mousefollow({
	html:
		'<div class="pop-up"><div id="pop-img-3"></div><p>Light trespass is simply light falling where it was not intended. It contributes to glare and sky glow by increasing the area the light is visible from and the surfaces it has to reflect off of.. Additionally, it has the potential to impact people’s sleep when nearby sources cause light to spill into their homes.</p></div>',
});

$('#define4').mousefollow({
	html:
		'<div class="pop-up"><div id="pop-img-4"></div><p>Urban areas can be overlit, especially in commercial areas with many different sources of light. This causes clutter and it contributes to skyglow, glare and trespass.</p></div>',
});

$('#define5').mousefollow({
	html:
		'<div class="pop-up"><div id="pop-img-5"></div><p>Uplight is often used for advertising signage. A vast majority of uplight is wasted and contributes directly to skyglow.</p></div>',
});
//End Slides
