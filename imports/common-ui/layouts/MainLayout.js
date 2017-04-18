import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ content }) => {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <a href="/mine">My Books</a>{' | '}
        <a href="/">Find Books</a>
      </div>
      <div>
        {content()}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  content: PropTypes.func.isRequired,
};

export default MainLayout;
