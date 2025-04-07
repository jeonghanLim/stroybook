"use client";

import PropTypes from 'prop-types';
import React from 'react';

export const TextField = ({
  name
  , value
  , type
  , label
  , labelLeft = false
  , dense = false
  , disabled = false
  , error = false
  , required = false
  , placeholder
  , helperText
  , onChange
  , readOnly = false
  , startIcon
  , endIcon
  , ...props
}) => {

  const [internalValue, setInternalValue] = React.useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (!value) {
      setInternalValue(newValue);
    }
    
    onChange && onChange(newValue);
  };

  const currentValue = value ? value : internalValue;

  const classProp = [
    dense && 'dense',
    error && 'error',
    value && 'hasValue',
    currentValue && 'hasValue',
    readOnly && 'readOnly',
  ]
    .filter(Boolean)
    .join(' ');

  return (

    <div className={`textfield-wrapper ${classProp}`}>
      {labelLeft && (
        <div className='labelleft-base'>
          {required && <span className="required-marker">*</span>}{label}
        </div>
      )}
      <div>
        {!labelLeft && (
          <div className='label-base'>
            {label}{required && <span className="required-marker">*</span>}
          </div>
        )}
        <div className='textfield-base'>
          {startIcon &&
            <span className="input-icon">{startIcon}</span>
          }
          <input
            type={type}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            readOnly={readOnly}
            {...props}
          />
          {endIcon &&
            <span className="input-icon">{endIcon}</span>
          }
        </div>
        {helperText && <div className="helper-text">{helperText}</div>}
      </div>
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string,
  labelLeft: PropTypes.bool,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};

TextField.defaultProps = {
  value: '',
  type: 'text',
  label: 'label',
  labelLeft: false,
  dense: false,
  disabled: false,
  error: false,
  required: false,
  placeholder: 'Placeholder',
  helperText: 'HelperText',
  readOnly: false,
};