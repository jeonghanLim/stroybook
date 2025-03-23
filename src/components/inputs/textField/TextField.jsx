import React from 'react';
import PropTypes from 'prop-types';

export const TextField = ({
  label,
  dense = false,
  error = false,
  disabled = false,
}) => {

  const classNames = [
    'textfield-base', 
    dense && 'dense', 
    error && 'error', 
    disabled && 'disabled'
  ]
    .filter(Boolean) 
    .join(' '); 

    return (
      <div>
        <div>{label}</div>
        <div className={classNames}>
            <input type='text' name='test' disabled={disabled}/>
        </div>
      </div>
    )
}

TextField.propTypes = {
  label: PropTypes.string,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

TextField.defaultProps = {
  label: '',
  dense: false,
  disabled: false,
  error: false,
};