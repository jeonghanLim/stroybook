import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TextField = ({
  name
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
  , readonly = false
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
            type={type}
            name={name}
            disabled={disabled}
            error={error}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            readonly={readonly}
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
  type: 'text',
  label: 'label',
  labelLeft: false,
  dense: false,
  disabled: false,
  error: false,
  required: false,
  placeholder: 'Placeholder',
  helperText: 'HelperText',
  readonly: false,
};