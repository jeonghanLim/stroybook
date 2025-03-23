import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TextField = ({
  label,
  dense = false,
  disabled = false,
  error = false,
  placeholder,
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const classProp = [
    dense && 'dense', 
    disabled && 'disabled',
    error && 'error', 
    value && 'hasValue' 
  ]
    .filter(Boolean) 
    .join(' '); 

  return (
    <div>
      <div className={`label-base ${classProp}`}>{label}</div>
      <div className={`textfield-base ${classProp}`}>
      <input
          type="text"
          name="test"
          disabled={disabled}
          placeholder={placeholder}
          value={value} 
          onChange={handleChange} 
        />
        </div>
      </div>
    )
}

TextField.propTypes = {
  label: PropTypes.string,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  label: 'label',
  dense: false,
  disabled: false,
  error: false,
  placeholder: 'PlaceHoler'
};