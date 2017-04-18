import React from 'react';
import PropTypes from 'prop-types';
import { injectSheet } from '/imports/styling';
import classNames from 'classnames';

const styles = {
  root: {
    display: 'inline-block',
    perspective: 450,
  },

  flippedImage: {
    transform: 'rotateX(180deg)',
  },

  floatedImage: {
    transform: 'scale(1.2) rotate3d(1, 0, 0, 15deg)',
  },

  image: {
    transition: 'transform .3s ease',
  },

  reflection: {
    position: 'relative',
    opacity: 1,
    top: -3,
    transition: 'all .3s ease',
  },

  reflectionGone: {
    opacity: 0,
    transform: 'translateY(40px)',
  },

  reflectionOverlay: {
    background: 'linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 1) 40%)',
    position: 'absolute',
    top: 0,
  },
};

const ReflectedImage = ({ classes, float, height, src, title, width }) => {
  return (
    <div
      className={classes.root}
      style={{
        height,
        width,
      }}
    >
      <img
        className={classNames({
          [classes.floatedImage]: float,
          [classes.image]: true,
        })}
        height={height}
        src={src}
        title={title}
        width={width}
      />

      <div
        className={classNames({
          [classes.reflection]: true,
          [classes.reflectionGone]: float,
        })}
      >
        <img
          className={classes.flippedImage}
          height={height}
          src={src}
          width={width}
        />
        <div
          className={classes.reflectionOverlay}
          style={{
            height,
            width,
          }}
        />
      </div>
    </div>
  );
};

ReflectedImage.propTypes = {
  float: PropTypes.bool,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number.isRequired,
};

export default injectSheet(styles)(ReflectedImage);
