import React from 'react';

import PropTypes from 'prop-types';

// 사용자가 선택할 속성들 (사이즈, 타입)
/** Primary UI component for user interaction */
export const Divider = ({ 
orientation, 
fullWidth = false,
dividerText, 
variant, 
flex, 
...props 
}) => {  

    let orientationClass = "";
    switch(orientation) {
      case "vertical" : orientationClass = 'divider-vertical'; break;
      default : orientationClass = 'divider-horizontal'; break;
    }

    return (
      <hr className={['divider', orientationClass, fullWidth ? "w-full" : ""].join(' ')}></hr>
    );
};

Divider.propTypes = {
  /** Which direction should the divider be? */
  orientation : PropTypes.oneOf(['horizontal', 'vertical']),
  fullWidth : PropTypes.bool,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  fullWidth : false,
  // variant: 'contained',
};
