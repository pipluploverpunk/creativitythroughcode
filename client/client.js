ProfileFoodItems = new Meteor.Collection('profilefooditems'); 
if (Meteor.isClient) {
Template.about.rendered = new WOW().init();    
    
Template.about.helpers({
    
profilefooditems: function(){
    return ProfileFoodItems.find();
}

    
});
}