import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TextField = ({
  name
  , label
  , labelLeft = false
  , dense = false
  , disabled  = false
  , error = false
  , required = false
  , placeholder
  , helperText
  , onChange
  , startIcon
  , endIcon
  , ...props
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange && onChange(newValue);
    console.log(newValue);
  };

  const classProp = [
    dense && 'dense',
    error && 'error',
    value && 'hasValue'
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
            type="text"
            name={name}
            disabled={disabled}
            error={error}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
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
  label: PropTypes.string,
  labelLeft: PropTypes.bool,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};

TextField.defaultProps = {
  label: 'label',
  labelLeft: false,
  dense: false,
  disabled: false,
  error: false,
  required: false,
  placeholder: 'Placeholder',
  helperText: 'HelperText'
};