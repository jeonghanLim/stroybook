import React from "react";
import PropTypes from 'prop-types';
export default function Radio({title, name, flex, options, color, size, helper}) {
  const radioSizeClassName = size === "lg" ? "radio-size-lg" : "radio-size-md";

  const radioColorClassName = color === 'brand' ? 'radio-color-brand' : 'radio-color-neutral';
  
  const radioFlexClassName = flex === 'column' ? 'radio-flex-column' : 'radio-flex-row';
  // 
  return <div className={[`radio-group`, radioSizeClassName].join(' ')}>  {/* 제목과 라디오 그룹을 묶는다 */}
    <h2 className="radio-title">{title}</h2>
    <div className={[`radio-group`, radioFlexClassName].join(' ')}> {/* 라디오 옵션들을 묶는다. flex 방식 지정 */}
        {options.map((item, index) => (
            <div className="radio-section" key={index}>   {/* 라디오 객체와 라벨을 묶는다 */}
                {/* 라디오 객체 시작 */}
                <div className={[`radio-wrapper`, radioColorClassName].join(' ')}>
                    <div className="radio-base">
                      {item.disabled
                                    ? <input className="inputClass" type="radio" name={name} value={item.value} disabled/> 
                                    : <input className="inputClass" type="radio" name={name} value={item.value} />}
                    </div>
                </div>
                {/* 라디오 객체 끝 */}
                <label className="radio-label">{item.label}</label>
            </div>
        ))}
    </div>
    {helper? <div className="radio-helper">{helper}</div> : null}
    
  </div>;
}

Radio.propTypes = {
  /** How large should the radio be? */
  color: PropTypes.oneOf(['brand', 'neutral']),
  /** How large should the radio be? */
  size: PropTypes.oneOf(['md', 'lg']),
  /** Optional click handler */
  onClick: PropTypes.func,

  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  color: 'brand',
  size: 'md',
  onClick: undefined,
};
