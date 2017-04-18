import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../Book';
import books from './fake-book-data';

const clickFn = jest.fn();

test('provides book ID when clicked', () => {
  const component = renderer.create(
    <Book book={books[0]} onClick={clickFn} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(clickFn.mock.calls.length).toBe(1);
  expect(clickFn.mock.calls[0][0]).toBe('abc123');
});
