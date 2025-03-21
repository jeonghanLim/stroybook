import React from 'react';
import PropTypes from 'prop-types';
import useRipple from '@/hooks/useRipple';

// 사용자가 선택할 속성들 (사이즈, 타입)
/** Primary UI component for user interaction */
export const Button = ({ 
  variant= 'contained',
  size= 'md',
  increasedWidth = false,
  increasedHeight = false,
  color= 'brand',
  disabled = false,
  label, 
  startIcon, 
  endIcon, 
  onClick,
  ...props 
}) => {  
  
  const handleClick = (e) => {
    if(disabled) return;
    onClick && onClick(e);
  }

  const { handleFocus, handleBlur, rippleContainer} = useRipple({centered: false, color : variant == 'contained' ? 'white' : color});

  return (
    <button
      type="button"
      className={`btn btn-size-${size} btn-${variant}-color-${color} ${disabled && disabled}`}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{width: increasedWidth && '100%', height: increasedHeight && '100%'}}
      {...props}
    >
      <div className="btn-base">
        {startIcon &&
          <span className="btn-mask-box">{startIcon}</span>
        }
        {label && 
          <span className="label">
            {label}
          </span>
        }
        {endIcon &&
          <span className="btn-mask-box">{endIcon}</span>
        }
      </div>
      {rippleContainer}
    </button>
  );
};

Button.propTypes = {
  variant : PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  increasedWidth  : PropTypes.bool,
  increasedHeight  : PropTypes.bool,
  color : PropTypes.oneOf(['brand', 'neutral']),
  label: PropTypes.string,
  startIcon : PropTypes.element, 
  endIcon : PropTypes.element, 
  onClick: PropTypes.func,
  disabled : PropTypes.bool,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'md',
  increasedWidth : false,
  increasedHeight : false,
  color: 'brand',
  disabled : false,
};
