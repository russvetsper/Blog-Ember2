import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    buttonHasBeenClicked: function(){
      this.set('isAnswerShowing', true);
    },
    hideAnswer: function() {
      this.set('isAnswerShowing', false);
    }
  }
});
