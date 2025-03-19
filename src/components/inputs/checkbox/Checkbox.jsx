import React, { useState } from 'react';

import PropTypes from 'prop-types';

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
      variantClass = 'checkBox'; break;
  }
  switch(size) {
    case "lg" : sizeClass = 'checkBox-size-lg'; break;
    default : sizeClass = 'checkBox-size-md'; break;
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
        <div className={['checkbox-wrapper', color].join(' ')}>
          <div className={[ variantClass, sizeClass, colorClass, disabled ? "disabled" : ""].join(' ')} >
            <input 
              type="checkbox" 
              className="inputClass"
              checked={isChecked}
              onChange={handleChange}  
            /> 
            {/* {checked && icon1} */}
            {/* {!checked && icon2} */}
            { checked && checkIcon && <span className="checkbox-icon">{checkIcon}</span>}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2607 8.26066L10.8 17.7213L4.93934 11.8607L7.06066 9.73934L10.8 13.4787L18.1393 6.13934L20.2607 8.26066Z" fill="#003D88"/>
</svg>

            {checkText && <span className="checkbox-text">{checkText}</span>}
          </div>
        </div>
    </label>
    // <label>
    //     <div className="checkbox-wrapper">
    //         <input 
    //           type="checkbox" 
    //           className={[ 'peer-hidden', variantClass, sizeClass, colorClass, disabled ? "disabled" : ""].join(' ')}
    //           checked={isChecked}
    //           onChange={handleChange}  
    //         /> 
    //       {/* <div className={[ variantClass, sizeClass, colorClass, disabled ? "disabled" : ""].join(' ')} > */}
    //         <span className="checkbox-icon"></span>
    //         {checkText && <span className="checkbox-text">{checkText}</span>}
    //       {/* </div> */}
    //     </div>
    // </label>
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
