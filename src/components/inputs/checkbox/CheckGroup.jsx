import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { CheckIcon, IndeterminateIcon } from '@/components/icon/Icon';

// size : la, md ok / color : brand, neutral  / checkText : 라벨 / disabled : 고정(true,false)
// onChange : 동작은 나중에 / checked : true, false(true면 체크가 되는거) / 
// opacity: 0 : 체크박스 사라지는거 => boxLine bool로 처리할까?
export const Checkbox = ({ 
  size = 'md',
  color = 'brand', 
  variant = 'checkbox', 
  disabled = false, 
  checked = false, 
  indeterminate = false,
  checkIcon, 
  checkText = '동해물과 백두산이 마르고 닳도록', 
  onChange, 
  ...checkboxProps 
}) => {  

  // 체크 여부 상태값
  const [ isChecked, setIsChecked ] = useState(checked);

  const handleChange = (e) => {
    checked = e.target.checked;
    setIsChecked(checked);
    onChange && onChange(checked);
  }

  return (
    <label className={`checkbox-label checkbox-size-${size} ${variant}-color-${color}`}>
        <div className={`checkbox-wrapper ${disabled ? 'disabled' : ' '}`}> 
          <div className={`checkbox-base ${variant} `} >
            <input 
              type="checkbox" 
              className="inputClass"
              checked={isChecked}
              onChange={handleChange}  
              disabled = {disabled}
            /> 
            {(isChecked || `${variant}` === 'check') && !indeterminate && <CheckIcon></CheckIcon>}
            {indeterminate && isChecked && <IndeterminateIcon></IndeterminateIcon>}
          </div>
        </div>
          {checkText && <span className="checkbox-text">{checkText}</span>}
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
  checkText : PropTypes.string,
  onChange: PropTypes.func,
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