function myMap() {
    
        var mapCanvas = document.getElementById("map");
        var myCenter = new google.maps.LatLng(52.341735, 4.823611);

        var mapOptions = { 
            center: myCenter, 
            zoom: 17,
            mapTypeId: 'roadmap'
            };

        var map = new google.maps.Map(mapCanvas, mapOptions);
   
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
}