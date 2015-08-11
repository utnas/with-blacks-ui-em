import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return Ember.Object.create({identification: '', password: ''});
  },

  setupController: function(controller, model){
    controller.set('credentials', model);
  },

  actions: {
    authenticate: function(credentials){
      var _this = this;
      console.log('Connecting ...');
      this.get('session').authenticate('simple-auth-authenticator:jwt',credentials).then(function(){
        _this.transitionTo('/login');
        console.log('Connected waittig for redirection ...');
      });
    }
  },

});
