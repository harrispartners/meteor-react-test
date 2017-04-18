import React from 'react';
import PropTypes from 'prop-types';
import ReflectedImage from './ReflectedImage';
import _get from 'lodash/get';
import classNames from 'classnames';
import { injectSheet } from '/imports/styling';

const styles = {
  root: {
    cursor: 'pointer',
    margin: '0 16px -100px 16px',
    position: 'relative',
  },

  bookSelected: {
    border: '4px solid blue',
  },
};

const Book = ({ book, classes, onClick, selected }) => {
  const { description, imageLinks } = book.volumeInfo;
  const thumbnail =
    _get(imageLinks, 'smallThumbnail') || 'http://placehold.it/128x187';

  return (
    <div className={classes.root} onClick={onClick}>
      <div>
        <ReflectedImage
          float={selected}
          height={187}
          src={thumbnail}
          title={description}
          width={128}
        />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  classes: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default injectSheet(styles)(Book);
