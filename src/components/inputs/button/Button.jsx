import React from 'react';
import PropTypes from 'prop-types';

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

  let sizeClass = "";
  let colorClass = "";
  switch(size) {
    case "sm" : sizeClass = 'btn-size-sm'; break;
    case "lg" : sizeClass = 'btn-size-lg'; break;
    default : sizeClass = 'btn-size-md'; break;
  }
  switch(color) {
    case "neutral" : 
      colorClass = variant === 'contained' ? 'btn-contained-color-neutral' : 
                    variant === 'outlined' ? 'btn-outlined-color-neutral' : 
                    'btn-text-color-neutral'; break;
    default : 
      colorClass = variant === 'contained' ? 'btn-contained-color-brand' :
                    variant === 'outlined' ? 'btn-outlined-color-brand' :
                    'btn-text-color-brand'; break;
  }

  const handleClick = (e) => {
    if(disabled) return;
    onClick && onClick(e);
  }

  return (
    <button
      type="button"
      className={['btn', sizeClass, colorClass, disabled ? "disabled" : ""].join(' ')}
      onClick={handleClick}
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
