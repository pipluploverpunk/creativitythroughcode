Comments = new Meteor.Collection('comments');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
if (Meteor.isClient) {
    Session.setDefault('currentcomment', 0);
    Template.comments.events({
        'submit .new-comment':function(event){
        event.preventDefault();
        var comment = event.target.comment.value;
        var color = event.target.color.value;
            console.log("Entered comment function " + comment + " " + color);
            Comments.insert({
                postedcomment: comment,
                datesubmitted: new Date(),
                styleofcomment: 'color: ' + selectedcolor + ';' + 'font-size' + 'font-size: ' + fontsize + 'px;'
            });
            event.target.comment.value ="";
            event.target.color.value="";
        },  
        "click #comment":function(event){
        console.log(this._id);
             Session.set('currentcomment', this._id);
    },
        "click #deletecomment":function(event){
        event.preventDefault();
            Comments.remove(Session.get('currentcomment'));
    }
    
    
    });
    
    


    Template.comments.helpers({
        comments:function(){
            return Comments.find();    
        }
        
    });
    Template.registerHelper('formatDate', function(date) {
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
});
}