<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<link type="text/css" rel="stylesheet" href="css/style.css"/>
<script type="text/javascript" src="js/jquery-1.6.2.min.js"></script>
<script type="text/javascript"
    src="http://maps.google.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript" src="js/init.js"></script>
</head>
<body>

    <div id="map_control">
        <div class="settings_icon"></div>
        <p>Settings</p>
        Latitude: <input type="text" id="lat" /><br />
        Longitude: <input type="text" id="lng" /><br />
        <input type="submit" value="center map" id="centerLatLng" />
        <input type="submit" value="add marker" id="addMarkerLatLng" />

        <hr />

        <div id="route">
            <div style="overflow: auto;" >
                <h3>Route</h3>
                <ul id="list"></ul>
            </div>

        </div>
    </div>
    
    
    <div id="map_canvas"></div>

    

    <div id="footer">
        </div>
</body>
</html>