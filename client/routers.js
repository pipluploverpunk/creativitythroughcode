Router.route('/', {
    template: 'about',
    title: 'creativitythroughcode - about'
});
Router.route('/gallery',{
    template: 'gallery',
    title: 'creativitythroughcode - gallery'
});
Router.route('/contact',{
    template: 'contact',
    title: 'creativitythroughcode - contact'
});
Router.route('/converter',{
<<<<<<< HEAD
    onBeforeAction: function (pause){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.render('converter');
        } else{
            this.render('login');
        }
    }
=======
    template: 'converter',
    title: 'creativitythroughcode - CurrencyConverter'
>>>>>>> 6572f31ac072e1592986d66ea86ff324b82aca2e
});
Router.route('/math',{
    template: 'math',
    title: 'creativitythroughcode - Math'
});
Router.route('/login',{
<<<<<<< HEAD
    template: 'login',
    title: 'creativethrough - Login'
});

Router.route('/javascript',{
    template: 'javascript',
    title: 'javascript',
=======
    template: 'logIn',
    title: 'creativethrough - Login'
>>>>>>> 6572f31ac072e1592986d66ea86ff324b82aca2e
});