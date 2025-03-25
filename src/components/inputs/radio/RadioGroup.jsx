import React from "react";
import PropTypes from 'prop-types';
import Radio from "./Radio";
export default function RadioGroup({title, name, flex, options, color, size, helper}) {
  const radioSizeClassName = size === "lg" ? "radio-size-lg" : "radio-size-md";

  const radioColorClassName = color === 'brand' ? 'radio-color-brand' : 'radio-color-neutral';
  
  const radioFlexClassName = flex === 'column' ? 'radio-flex-column' : 'radio-flex-row';

  return <div className={[`radio-group`, radioSizeClassName].join(' ')}>  {/* 제목과 라디오 그룹을 묶는다 */}
    <h2 className="radio-title">{title}</h2>
    <div className={[`radio-group`, radioFlexClassName].join(' ')}> {/* 라디오 옵션들을 묶는다. flex 방식 지정 */}

        {options.map((item, index) => (
          <Radio key={index} name={name} label={item.label} value={item.value} disabled={item.disabled} radioColorClassName={radioColorClassName}/>
        ))}
        
    </div>
    {helper? <div className="radio-helper">{helper}</div> : null}
    
  </div>;
}

RadioGroup.propTypes = {
  /** How large should the radio be? */
  color: PropTypes.oneOf(['brand', 'neutral']),
  /** How large should the radio be? */
  size: PropTypes.oneOf(['md', 'lg']),
  /** Optional click handler */
  onClick: PropTypes.func,

  disabled: PropTypes.bool,
};

RadioGroup.defaultProps = {
  color: 'brand',
  size: 'md',
  onClick: undefined,
};
