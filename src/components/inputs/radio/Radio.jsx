import React from "react";
import PropTypes from 'prop-types';
import "../../../styles/002system/input.css"
export default function Radio() {
  return <div className="radio-size-md radio-color-brand">
    <h2 className="radio-title">색을 골라보세요</h2>
    <input type="radio" name="color" value="red" className="radio-base" />
    <label htmlFor="red" className="radio-label">빨강</label>

    <input type="radio" name="color" value="blue" className="radio-base" />
    <label htmlFor="blue" className="radio-label">파랑</label>

    <input type="radio" name="color" value="green" id="green" className="radio-base" />
    <label htmlFor="green" className="radio-label">초록</label>
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
  variant: 'contained',
  onClick: undefined,
};
