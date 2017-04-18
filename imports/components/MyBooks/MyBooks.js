import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf, { BookshelfHelper } from '../Bookshelf';

@BookshelfHelper class MyBooks extends Component {
  render() {
    return (
      <div>
        <Bookshelf
          books={this.props.books}
          selectedBookIds={this.props.selectedBookIds}
          onToggleBookSelection={this.props.onToggleBookSelection}
        />
      </div>
    );
  }
}

export default MyBooks;
