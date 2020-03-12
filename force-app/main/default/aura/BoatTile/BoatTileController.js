({
    onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");
        var cmpEvent = component.getEvent("BoatSelect");
        var boatId = event.getSource().get("v.name");
        console.log('OUTPUT : ', boatId);
        cmpEvent.setParams({
            "boatId" : boatId
        });
        cmpEvent.fire();

        var BoatSelectedEvt = $A.get('e.c:BoatSelected');
        console.log(BoatSelectedEvt);
        BoatSelectedEvt.setParams({
            "boat" : boat
        });     
        BoatSelectedEvt.fire();
        console.log('App event');

        var lat = boat.Geolocation__Latitude__s;
        var long = boat.Geolocation__Longitude__s;
        var label = boat.Name;
        var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");        
        plotMapMarkerAppEvent.setParams({          
            "lat"   : lat,              
            "long"  : long,                
            "label" : label,               
            "SObjectId" : boat.Id}
        );   
        plotMapMarkerAppEvent.fire();
    }
})