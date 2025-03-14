import React from 'react';
import PropTypes from 'prop-types';

// 사용자가 선택할 속성들 (사이즈, 타입)
/** Primary UI component for user interaction */
export const Button = ({ variant, size, color, label, startIcon, endIcon, disabled, ...props }) => {  

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

  return (
    <button
      type="button"
      className={['btn', sizeClass, colorClass, disabled ? "disabled" : ""].join(' ')}
      {...props}
    >
      <div className="btn-base">
        {startIcon &&
          <span className="btn-mask-box">{startIcon}</span>
        }
        <span className="label">
            {label}
        </span>
        {endIcon &&
          <span className="btn-mask-box">{endIcon}</span>
        }
      </div>
    </button>
  );
};

Button.propTypes = {
  /** How large should the button be? */
  color : PropTypes.oneOf(['brand', 'neutral']),
  /** How large should the button be? */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** How large should the button be? */
  variant : PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,

  disabled : PropTypes.bool,
};

Button.defaultProps = {
  color: 'brand',
  size: 'md',
  variant: 'contained',
  onClick: undefined,
};
