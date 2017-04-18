import { createContainer } from 'meteor/react-meteor-data';
import BookFinder from './BookFinder';
import { saveBooks } from '/imports/methods';
import { promisifyMethod } from '/imports/helpers';

export default createContainer(() => {
  return {
    saveBooks: promisifyMethod(saveBooks),
  };
}, BookFinder);
