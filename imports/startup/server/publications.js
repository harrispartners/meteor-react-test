import { Meteor } from 'meteor/meteor';
import Books from '/imports/collections/books';

Meteor.publish('myBooks', function() {
  return Books.find();
});
