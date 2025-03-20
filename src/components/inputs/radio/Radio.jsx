import React from "react";
import PropTypes from 'prop-types';
export default function Radio({name, options, color, size, helper}) {
  return <div className="radio-group radio-size-lg">
    <h2 className="radio-title">색을 골라보세요</h2>
    <div className="radio-section">
      {/* 라디오 객체 시작 */}
      <div className="radio-wrapper radio-color-neutral">
        <div className="radio-base">
          <input className="inputClass" type="radio" name="color" value="red" />
        </div>
      </div>
      {/* 라디오 객체 끝 */}
      <label className="radio-label">빨강</label>
    </div>
    <div className="radio-section">
      {/* 라디오 객체 시작 */}
      <div className="radio-wrapper radio-color-neutral">
        <div className="radio-base">
          <input className="inputClass" type="radio" name="color" value="blue" />
        </div>
      </div>
      {/* 라디오 객체 끝 */}
      <label className="radio-label">파랑</label>
    </div>
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
