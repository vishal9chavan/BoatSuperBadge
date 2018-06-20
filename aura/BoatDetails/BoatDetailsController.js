({
   
    onRecordUpdated : function(component, event, helper) {
		var boat = component.get("v.boat");
        console.log("onRecordUpdated called | boat: " + boat.Id);

        //invoke a refresh on the reviews tab, calling public method refresh
        var BoatReviews = component.find("BoatReviews");
        console.log("BoatReviews: " + BoatReviews);
        if(typeof BoatReviews != 'undefined'){
            BoatReviews.refresh();
        }
   
    },
    
     onBoatSelected : function(component, event, helper) {
        var boat = event.getParam("boat");
        component.set("v.id",boat.Id);
        component.find("service").reloadRecord();
   },
     onBoatReviewAdded : function(component, event, helper) {
        if( component.find("reviews")){
            component.find("reviews").refresh();
        }   
            component.find("tabset").set("v.selectedTabId","boatreviewtab");
    },
   

       
    handleRecordUpdate : function(cmp, event) {
        //handle the recordUpdated event
        var changeType = event.getParam("changeType");
        if(changeType === "LOADED") {
            // handle record loaded
            console.log("Record has been LOADED.")
            if( cmp.find("reviews")){
                cmp.find("reviews").refresh();
            }   
            cmp.set("v.logMessage", "Record has been loaded.");

        } else if(changeType === "CHANGED") {
            // handle record changed
            
            cmp.set("v.logMessage", "Record has been changed.");
            
        } else if(changeType === "REMOVED") {
            // handle record removed
            cmp.set("v.logMessage", "Record has been removed.");
        } else if(changeType === "ERROR") {
            // handle error while loading|saving|deleting record
            cmp.set("v.logMessage", "There is some error while loading/updating record.");
        } else {
            // you should not get any other type than these 4 (as of Summer '17)
        }
    }

})