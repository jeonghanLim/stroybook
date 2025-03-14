import React from 'react';

import PropTypes from 'prop-types';

// 사용자가 선택할 속성들 (사이즈, 타입)
/** Primary UI component for user interaction */
export const Checkbox = ({ size, color, checkText, ...props }) => {  


  return (
    <label className="checkbox">
        <input type="checkbox" />
        <span className="checkbox-icon"></span>
        {checkText &&
            <span className="checkbox-text">{checkText}</span>
        }
    </label>
  );
};

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  color: 'brand',
  size: 'md',
  variant: 'contained',
  onClick: undefined,
};
