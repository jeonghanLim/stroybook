import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { CheckIcon } from '@/components/icon/Icon';

// size : la, md ok / color : brand, neutral  / checkText : 라벨 / disabled : 고정(true,false)
// onChange : 동작은 나중에 / checked : true, false(true면 체크가 되는거) / 
// opacity: 0 : 체크박스 사라지는거 => boxLine bool로 처리할까?
//
export const Checkbox = ({ size, color, variant, checkIcon, checkText, disabled, onChange, checked=false, ...checkboxProps }) => {  

  let sizeClass = "";
  let colorClass = "";
  let variantClass = "";
  switch(variant){
    case "check" :
      variantClass = 'check'; break;
    default : 
      variantClass = 'checkbox'; break;
  }
  switch(size) {
    case "lg" : sizeClass = 'checkbox-size-lg'; break;
    default : sizeClass = 'checkbox-size-md'; break;
  }
  switch(color){ 
    case "neutral" :
      colorClass = variant  === 'checkbox' ? 'checkbox-color-neutral' :
                    variant === 'check' ? 'check-color-neutral' : ''; break;
    default :
      colorClass = variant === 'checkbox' ? 'checkbox-color-brand' :
                    variant === 'check' ? 'check-color-brand' : ''; break;
  }
  // switch(color){             
  //   case "neutral" :
  //     colorClass ='color-neutral'; break;
  //   default :
  //     colorClass = 'color-brand'; break;
  // }

  // 체크 여부 상태값
  const [ isChecked, setIsChecked ] = useState(checked);

  const handleChange = (e) => {
    checked = e.target.checked;
    setIsChecked(checked);
    onChange && onChange(checked);
  }

  return (
    <label>
        <div className={['checkbox-wrapper', colorClass].join(' ')}>
          <div className={[variantClass, sizeClass, disabled ? "disabled" : ""].join(' ')} >
            <input 
              type="checkbox" 
              className="inputClass"
              checked={isChecked}
              onChange={handleChange}  
            /> 
            {variantClass === 'check' || isChecked && <CheckIcon></CheckIcon>}
            {variantClass === 'check' && <CheckIcon></CheckIcon>}
            {checkText && <span className="checkbox-text">{checkText}</span>}
          </div>
        </div>
    </label>
  );
};

Checkbox.propTypes = {
  /** How large should the checkbox be? */
  color : PropTypes.oneOf(['brand', 'neutral']),
  /** How large should the checkbox be? */
  size: PropTypes.oneOf(['md', 'lg']),
  /** checkbox contents */
  checkText: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,

  disabled : PropTypes.bool,
};

Checkbox.defaultProps = {
  color: 'brand',
  size: 'md',
  variant: 'checkbox',
  variant: 'checkbox',
  onClick: undefined,
};

