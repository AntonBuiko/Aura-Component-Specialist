public with sharing class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c>  getAll(String boatId){
        System.debug(boatId);
        return [
            SELECT Id, Comment__c, Rating__c, CreatedBy.Id, 
            CreatedBy.Name,CreatedBy.SmallPhotoUrl,
            CreatedBy.CompanyName,
            LastModifiedDate,CreatedDate
            FROM BoatReview__c where Boat__c =: boatId
        ];
    }
}
