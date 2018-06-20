({
    getTypesOfBoats : function(component) {
    		var action = component.get("c.getBoatTypes");
    		action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                		component.set("v.options", response.getReturnValue());
                }
                
                else if (state === "INCOMPLETE") {
                    // do something
                }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                     errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
            });

            $A.enqueueAction(action);
    		
    		
    	
    },
    renderNewButton: function (component) {
        var createRecordEvent = $A.get('e.force:createRecord');
        if (createRecordEvent) {
            component.set('v.showNewButton', true);
            
        }
    }
})