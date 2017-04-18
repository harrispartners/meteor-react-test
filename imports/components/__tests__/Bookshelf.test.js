import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Bookshelf from '../Bookshelf';
import books from './fake-book-data';

const selectionFn = jest.fn();

test('clicking a book adds it to the selection', () => {
  const bookshelfJSX = (
    <Bookshelf
      books={books}
      onToggleBookSelection={selectionFn}
      selectedBookIds={[]}
    />
  );
  const component = renderer.create(bookshelfJSX);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const wrapper = mount(bookshelfJSX);
  const bookshelf = wrapper.find('.bookshelf');
  bookshelf.childAt(0).simulate('click');

  expect(selectionFn.mock.calls.length).toBe(1);
  expect(selectionFn.mock.calls[0][0]).toBe('abc123');
});
