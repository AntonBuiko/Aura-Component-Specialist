({
    doSearch : function(component, event, helper) {
        var formData = event.getParam('arguments');
        if (formData) {
            var boatTypeId = formData.boatTypeId;
            component.set('v.boatTypeId', boatTypeId);
            helper.onSearch(component, component.get('v.boatTypeId'));
        }
        else{
            helper.onSearch(component, '');
        }
    },
    onBoatSelect : function(component, event, helper) {
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    }
})
