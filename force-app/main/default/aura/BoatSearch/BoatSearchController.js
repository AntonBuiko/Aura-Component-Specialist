({
    onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        console.log('formData Id : ', formData);
        var boatSearchResults = component.find("boatSearchResults");
        var auraMethodResult = boatSearchResults.search(formData.boatTypeId);
        console.log("auraMethodResult: " + auraMethodResult);
    }
})
    