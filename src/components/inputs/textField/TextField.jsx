import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TextField = ({
  label,
  labelLeft,
  dense = false,
  disabled = false,
  error = false,
  required = false,
  placeholder,
  helperText,
  startIcon, 
  endIcon, 
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
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
          {required && <span className="required-marker">*</span>}{labelLeft}
        </div>
      )}
      <div className='right-side'>
        <div className='label-base'>
          {label}{required && <span className="required-marker">*</span>}
        </div>
        <div className='textfield-base'>
          {startIcon &&
            <span className="input-icon">#</span>
          }
          <input
            type="text"
            name="test"
            disabled={disabled}
            error={error}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
            {endIcon &&
              <span className="input-icon">#</span>
            }
        </div>
        {helperText && <div className="helper-text">{helperText}</div>}
      </div>
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  labelLeft: PropTypes.string,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};

TextField.defaultProps = {
  label: 'label',
  labelLeft: 'labelLeft',
  dense: false,
  disabled: false,
  error: false,
  required: false,
  placeholder: 'PlaceHoler',
  helperText: 'HelperText'
};