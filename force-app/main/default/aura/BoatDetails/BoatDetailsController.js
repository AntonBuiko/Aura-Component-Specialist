({
    init: function(component, event, helper) {
        component.set("v.enableFullDetails", $A.get("e.force:navigateToSObject"));
    },

    onFullDetails: function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
    }, 
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.id", boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord() ;
        console.log(boatSelected);
    },
    onRecordUpdated : function(component, event, helper) {
        var BRcmp = component.find("BRcmp");
        var boat = component.get("v.boat");
        if(boat && BRcmp){
            console.log(BRcmp);
            var auraMethodResult = BRcmp.refresh();
            console.log("auraMethodResult: " + auraMethodResult);
        }
    },
    onBoatReviewAdded : function(component, event, helper) {
        component.find("boatTabSet").set("v.selectedTabId", "boatreviewtab");
        var BRcmp = component.find("BRcmp");
        console.log(BRcmp);
        var auraMethodResult = BRcmp.refresh();
        console.log("auraMethodResult: " + auraMethodResult);
    }
})
