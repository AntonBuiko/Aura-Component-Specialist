({
    onSearch : function(component, id) {
        var action = component.get("c.getBoats");
        action.setParams({ boatTypeId :  id});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                var boats = response.getReturnValue();
                if(boats){
                    component.set("v.boats", boats);
                }
            }
        });
        $A.enqueueAction(action);
    }
})
