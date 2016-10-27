import DS from 'ember-data';

export default DS.Model.extend({
  blogger: DS.attr(),
  question: DS.attr(),
  answer: DS.attr()

});
