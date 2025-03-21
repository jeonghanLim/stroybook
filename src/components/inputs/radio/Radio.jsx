import React from "react";
import PropTypes from 'prop-types';
export default function Radio({title, name, options, color, size, helper}) {
  const radioSizeClassName = size === "lg" ? "radio-size-lg" : "radio-size-md";

  const radioColorClassName = color === 'brand' ? 'radio-color-brand' : 'radio-color-neutral';

  return <div className={[`radio-group`, radioSizeClassName].join(' ')}>
    <h2 className="radio-title">{title}</h2>
    {options.map((item, index) => (
        <div className="radio-section" key={index}>
        {/* 라디오 객체 시작 */}
        <div className={[`radio-wrapper`, radioColorClassName].join(' ')}>
          <div className="radio-base">
            <input className="inputClass" type="radio" name={name} value={item.value} />
          </div>
        </div>
        {/* 라디오 객체 끝 */}
        <label className="radio-label">{item.label}</label>
      </div>
    ))}
    
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
