$(document).ready(function() {

    

    $('.settings_icon').mouseover(function() {
        $(this).css('background-color', '#36c');
    });

    $('.settings_icon').mouseout(function() {
        $(this).css('background-color', '');
    });

    $('.settings_icon').click(function() {
        if (parseInt($('#map_control').css('left')) < 0) {
            $('#map_control').animate({left: 0}, 'fast');
        } else {
            $('#map_control').animate({left: -341}, 'fast');
        }
        
    });
    
    var map = null;
    var adUnit = null;
    
    var markers = new Array();
    var lines = new Array();

    initialize();
    
    function initialize() {
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);       
        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
        });
       
    }
    
    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location, 
            map: map
        });
        
        var distance = 0;
        if (markers.length > 0) {
            var lastLocation = markers[markers.length - 1].getPosition(); 
            distance = distHaversine(location, lastLocation)
        }
        
        markers.push(marker);

        if (distance != 0) {
            $('#list').append('<li class="additional_info">Distance: ' + distance + '</li>');
            drawLine(markers[markers.length - 2].getPosition(), location);
        }
        $('#list').append('<li>' + markers.length + ' ' + location + '</li>');
    }

    function drawLine(start, destination) {
        var coordinates = [start, destination];
        var path = new google.maps.Polyline({
           path: coordinates,
           strokeColor: '#36c',
           strokeOpacity: 0.7,
           strokeWeight: 2
        });
        path.setMap(map);
    }
    
    
    function rad(x) {return x*Math.PI/180;}

    /**
     * Approximation for the distance calculation
     */
    function distHaversine(p1, p2) {
        var R = 6371; // earth's mean radius in km
        var dLat  = rad(p2.lat() - p1.lat());
        var dLong = rad(p2.lng() - p1.lng());

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;

        return d.toFixed(3);
    }

    function onMarkerClick(marker) {
        
    }
    
});