({
	doInit: function (component, event, helper) {
		helper.onInit(component, event);
	},

	onSave: function (component, event, helper) {
        component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));             
		component.find("service").saveRecord($A.getCallback(function (saveResult) {
			if (saveResult.state === "SUCCESS" || saveResult.state ===
				"DRAFT") {
                helper.onInit(component, event);
                var	boatReviewAddedEvnt = component.getEvent("boatReviewAdded");
                boatReviewAddedEvnt.fire();
				var	resultsToast = $A.get("e.force:showToast");
				if (resultsToast) {
					resultsToast.setParams({
						"title": "Saved",
						"message": "Boat Review Created"
					});
                    resultsToast.fire();
				} else {
					alert('Boat Review Created');
				}
			} else if (saveResult.state === "ERROR") {
				var	errMsg = '';
				console.log('Problem saving record, error: ' +
					JSON.stringify(saveResult.error));
				for (var i = 0; i < saveResult.error.length; i++) {
					errMsg += saveResult.error[i].message + "\n";
				}
				component.set("v.recordError", errMsg);
			} else {
				console.log('Unknown problem, state: ' + saveResult.state + ', error: ' +
					JSON.stringify(saveResult.error));
			}
		}));
	},

	onRecordUpdated: function (component, event, helper) {
		var	eventParams = event.getParams();
		if (eventParams.changeType === "CHANGED") {
			var	changedFields = eventParams.changedFields;
			var	saveResultsToast = $A.get("e.force:showToast");
			if (saveResultsToast != 'undefined')
			{
				saveResultsToast.setParams({
					"title": "Saved",
					"message": "Boat Review Saved"
				});
				saveResultsToast.fire();
			} else {
				alert('Boat Review Saved');
			}
		}
	}
})
