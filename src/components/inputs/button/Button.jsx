import React from 'react';
import PropTypes from 'prop-types';
import useRipple from '@/hooks/useRipple';

Button.propTypes = {
  variant : PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  increasedWidth  : PropTypes.bool,
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
  color: 'brand',
  disabled : false,
};

export const Button = ({ 
  variant
  , size
  , increasedWidth
  , color
  , disabled
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
      className={`btn btn-size-${size} btn-${variant}-color-${color} ${disabled && disabled}`}
      onClick={handleClick}
      onFocus={!disabled && handleFocus}
      onBlur={!disabled && handleBlur}
      style={{width: increasedWidth && '100%'}}
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
      {rippleContainer}
    </button>
  );
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
 */