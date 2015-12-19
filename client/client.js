ProfileFoodItems = new Meteor.Collection('profilefooditems'); 
if (Meteor.isClient) {
    Meteor.methods({
    
    });
    Session.setDefault('counter', 0);
    Session.setDefault('exchangedPrinciple', 0);
    Session.setDefault('finalCurrency', 0);
 
    Session.setDefault('val1', 0);
    Session.setDefault('val2', 0);
    Session.setDefault('score', 0);
    
    Template.converter.events({
        'submit .converter':function(event){
        event.preventDefault(); //prevents default action
            var cadToUsdRate = 0.75;
            var usdToCadRate = 1.33;
            var principleValue = event.target.principle.value;
            var rateSelected = event.target.direction.value;
            var exchangerates= [cadToUsdRate, usdToCadRate];
            Session.set('exchangedPrinciple', Meteor.myFunctions.exchange(principleValue, rateSelected));
        }
    });
    Template.converter.helpers({
        exchange:function(principle, rateSelected){
           return principle*exchangerates[rateSelected];
        },
        returnExchanged:function(){
        var temp = Session.get('exchangedPrinciple');
            if(temp < 0){
                return "That's a negative value.";
            }
            else{
                return temp;
            }
                
        }
            
        
    });

    Template.about.rendered = new WOW().init();    

    Template.about.helpers({

    profilefooditems: function(){
        return ProfileFoodItems.find();
    }


    });
}

Meteor.myFunctions={
   exchange:function(principle,rateSelected){
       var cadToUsdRate = 0.75;
            var usdToCadRate = 1.33;
            var exchangerates= [cadToUsdRate, usdToCadRate];
        return principle*exchangerates[rateSelected];
    } 
}

<<<<<<< HEAD
Template.javascript.helpers({
  printname:function(name){
    return String(name);
  }    
});
=======
>>>>>>> 6572f31ac072e1592986d66ea86ff324b82aca2e
Template.loginButtons.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};
