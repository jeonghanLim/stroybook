import React, { Children } from 'react';

import PropTypes from 'prop-types';

import { typography } from 'storybook/internal/theming';

// 사용자가 선택할 속성들 (사이즈, 타입)
/** Primary UI component for user interaction */
export const Button = ({ variant, ...props }) => {  

  return (
    <div className={variant}>{Children}</div>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** How large should the button be? */
  variant : PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** How large should the button be? */
  color : PropTypes.oneOf(['brand', 'neutral']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
  disabled : PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
