({
    doInit : function(component, event, helper) {
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(result){
            var options = result.getReturnValue();
            options.unshift({Name: 'All Types', Id: ''});
            console.log(options);
            component.set("v.options", options);
            // Let DOM state catch up.
        });
        $A.enqueueAction(action);
        if ($A.get("event.force:createRecord")){
            component.set('v.newButtonVisible', true);
        }
        else{
            component.set('v.newButtonVisible', false);
        }
    },
    handleNewClick : function(component, event, helper) {
        var createBoat = $A.get("event.force:createRecord");
        createBoat.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'BoatType__c' : component.get('v.selectedValue'),
            }
        });
        createBoat.fire();
    },
    onFormSubmit : function(component, event, helper) {
        var boatTypeId = component.get('v.selectedValue');
        var cmpEvent = component.getEvent("formsubmit");
        cmpEvent.setParams({"formData":
            {"boatTypeId" : boatTypeId}
        });
        cmpEvent.fire();
    },
    handleChange : function(component, event, helper){
        console.log(component.find("boatTypes").get("v.value"));
        component.set("v.selectedValue", component.find("boatTypes").get("v.value"));
    }
})