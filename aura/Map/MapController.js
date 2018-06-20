({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    }  ,
    onPlotMapMarker: function(component, event, helper) {
    	var id = event.getParam('sObjectId');
    	var latitude = event.getParam('latitude');
    	var longitude = event.getParam('longitude');
    	var label = event.getParam('label');
		 var label = event.getParam("label")
		console.log("onPlotMapMarker.lat: " + lat);
		console.log("onPlotMapMarker.long: " + long);
        		console.log("onPlotMapMarker.label: " + label);
        component.set("v.location", {'lat' : lat, 'long' : long, 'label' : label});
    }
})