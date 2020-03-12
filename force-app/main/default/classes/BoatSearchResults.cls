public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if (String.isEmpty(boatTypeId) || String.isBlank(boatTypeId)) {
            return [SELECT Id, Name, Picture__c, Contact__r.Name FROM Boat__c];
        }
        else {
            return [
                SELECT Id, Name, Picture__c, Contact__r.Name
                FROM Boat__c
                WHERE BoatType__c = : boatTypeId
                ];
        }
    }
}
