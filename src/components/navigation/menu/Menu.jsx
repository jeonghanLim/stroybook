import React from 'react';
import PropTypes from 'prop-types';

export const Menu = ({ ...props }) => {  
  return (
    <></>
  );
};

Menu.propTypes = {
  /** How large should the checkbox be? */
  color : PropTypes.oneOf(['brand', 'neutral']),
  /** How large should the checkbox be? */
  size: PropTypes.oneOf(['md', 'lg']),
  /** checkbox contents */
  checkText: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
  disabled : PropTypes.bool,
};

Menu.defaultProps = {
};
