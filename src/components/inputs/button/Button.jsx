import React from 'react';
import PropTypes from 'prop-types';
import useRipple from '@/hooks/useRipple';

export const Button = ({ 
  variant = 'contained'
  , size = 'md'
  , fullWidth = false
  , color = 'brand'
  , disabled = false
  , label
  , startIcon
  , endIcon
  , onClick
  , ...props 
}) => {  
  
  // code

  const handleClick = (e) => {
    if(disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick(e);
  }

  const rippleOption = {
    centered: false
    , color : variant == 'contained' ? 'white' : color
  }

  const { 
    handleFocus
    , handleBlur
    , rippleContainer 
  } = useRipple(rippleOption);

  return (
    <button
      type="button"
      className={`btn btn-size-${size} btn-${variant}-color-${color} ${disabled && 'disabled'}`}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{width: fullWidth && '100%'}}
      {...props}
    >
      <div className="btn-base">
        {startIcon &&
          <span className="btn-mask-box">{startIcon}</span>
        }
        {label && 
          <span className="label">{label}</span>
        }
        {endIcon &&
          <span className="btn-mask-box">{endIcon}</span>
        }
      </div>
      {!disabled && rippleContainer}
    </button>
  );
};

Button.propTypes = {
  variant : PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth : PropTypes.bool,
  color : PropTypes.oneOf(['brand', 'neutral', 'error', 'warning', 'info', 'success']),
  label: PropTypes.string,
  startIcon : PropTypes.element, 
  endIcon : PropTypes.element, 
  onClick: PropTypes.func,
  disabled : PropTypes.bool,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'md',
  fullWidth : false,
  color: 'brand',
  disabled : false,
};

/**
  className

  btn-size-sm
  btn-size-md
  btn-size-lg

  btn-contained-color-brand
  btn-outlined-color-brand
  btn-text-color-brand

  btn-contained-color-neutral
  btn-outlined-color-neutral
  btn-text-color-neutral

  btn-contained-color-error
  btn-outlined-color-error
  btn-text-color-error

  btn-contained-color-warning
  btn-outlined-color-warning
  btn-text-color-warning

  btn-contained-color-info
  btn-outlined-color-info
  btn-text-color-info

  btn-contained-color-success
  btn-outlined-color-success
  btn-text-color-success
 */