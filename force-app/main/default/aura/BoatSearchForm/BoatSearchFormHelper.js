({
    fireFormSubmitEvent : function(component, value){
        var cmpEvent = component.getEvent("formsubmit");
        cmpEvent.setParams({"formData" : value});
        cmpEvent.fire();
    }
})