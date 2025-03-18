import React from 'react';
import PropTypes from 'prop-types';

// 사용자가 선택할 속성들 (사이즈, 타입)
// size : la, md / color : brand, neutral / checkText : 라벨 / disabled : 고정(true,false)
// onClick : 동작은 나중에 / checked : true, false(true면 체크가 되는거) / 
// opacity: 0 : 체크박스 사라지는거 => boxLine bool로 처리할까?
//
export const Checkbox = ({ size, color, variant, checkText, disabled, onClick, ...checkboxProps }) => {  

  let sizeClass = "";
  let colorClass = "";
  switch(size) {
    case "lg" : sizeClass = 'checkBox-size-lg'; break;
    default : sizeClass = 'checkBox-size-md'; break;
  }
  switch(color){ 
    case "neutral" :
      colorClass = variant  === 'checkbox' ? 'checkBox-checkbox-color-neutral' :
                    variant === 'check' ? 'checkBox-check-color-neutral' : ''; break;
    default :
      colorClass = variant === 'checkbox' ? 'checkBox-checkbox-color-brand' :
                    variant === 'check' ? 'checkBox-check-color-brand' : ''; break;
  }

  return (
    <label className="checkbox-wrapper">
        <div className={['checkbox', sizeClass, colorClass, disabled ? "disabled" : ""].join(' ')}>
          <input type="checkbox" className="checkBox-base"/>
          <span className="checkbox-icon"></span>
          {checkText &&
              <span className="checkbox-text">{checkText}</span>
          }
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
  variant: 'contained',
  onClick: undefined,
};

