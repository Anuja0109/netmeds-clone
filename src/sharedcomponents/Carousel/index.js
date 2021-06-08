/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';

function CustomCarousel({ nav, margin, loop, cls, items }) {
  return (
    <OwlCarousel
      className={`owl-theme ${cls}`}
      loop={loop}
      margin={margin}
      nav={nav}
    >
      {items &&
        items.map((item) => (
          <div className="item">
            <h4>{item}</h4>
          </div>
        ))}
    </OwlCarousel>
  );
}

CustomCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  nav: PropTypes.bool.isRequired,
  margin: PropTypes.number.isRequired,
  loop: PropTypes.bool.isRequired,
  cls: PropTypes.string.isRequired,
};

export default CustomCarousel;
