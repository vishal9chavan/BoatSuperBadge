public with sharing class BoatUtils {
    public BoatUtils() {

    }
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
    		
    		if ((!Schema.sObjectType.BoatType__c.fields.Name.isAccessible()) && (!Schema.sObjectType.BoatType__c.fields.Id.isAccessible())){
    			throw new System.NoAccessException();
    				
    		}
    		List<BoatType__c> boats = [SELECT Id, Name FROM BoatType__c];
    			return boats;
    
    		
    	
    }
}