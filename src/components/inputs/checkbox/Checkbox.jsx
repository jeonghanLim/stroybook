import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { CheckIcon, IndeterminateIcon } from '@/components/icon/Icon';

export const Checkbox = ({ 
  size = 'md',
  color = 'brand', 
  variant = 'checkbox', 
  disabled = false, 
  checked = false, 
  indeterminate = false,
  checkIcon, 
  label, 
  onChange, 
  value,
  ...checkboxProps 
}) => {  

  // 체크 시 상태값
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(()=>{
    setIsChecked(checked);
  },[checked])

  // 체크박스 선택 시 
  const handleChange = (e) => {
    console.log("-------- 개별 개별 체크", e.target.checked)
    setIsChecked(e.target.checked) ;
    onChange && onChange(e.target.checked, e.target.value);
  };

  console.log("checked", checked)
  console.log("isChecked", isChecked)

  return (
    <label className={`checkbox-label checkbox-size-${size} ${variant}-color-${color}  ${disabled ? 'disabled' : ' '}`}>
        <div className={`checkbox-wrapper`}> 
          <div className={`checkbox-base ${variant}`} >
            <input 
              type="checkbox" 
              className="inputClass"
              checked={isChecked} 
              onChange={handleChange}  
              disabled = {disabled}
              value={value}
            /> 
            {(isChecked || checked || `${variant}` === 'check') && !indeterminate && <CheckIcon></CheckIcon>}
            {indeterminate && <IndeterminateIcon></IndeterminateIcon>}
          </div>
        </div>
          {label && <span className="checkbox-text">{label}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(['md', 'lg']),
  color : PropTypes.oneOf(['brand', 'neutral']),
  variant : PropTypes.oneOf(['check', 'checkbox']),
  disabled : PropTypes.bool,
  checked : PropTypes.bool,
  indeterminate : PropTypes.bool,
  checkIcon : PropTypes.element, 
  label : PropTypes.string,
  onChange: PropTypes.func,
  value : PropTypes.string
};

Checkbox.defaultProps = {
  size: 'md',
  color: 'brand',
  variant: 'checkbox',
  disabled: false,
  checked: false,
  indeterminate: false,
  onClick: undefined,
};

/*
checkbox-size-md
checkbox-size-lg
checkbox-color-brand
checkbox-color-neutral
check-color-brand
check-color-neutral
*/ 