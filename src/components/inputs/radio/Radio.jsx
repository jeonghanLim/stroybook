import React from "react";
import PropTypes from 'prop-types';
import "../../../styles/002system/input.css"
export default function Radio () {
    return <div className="radioLabel-size-lg radio-base-fg-brand">
            <input type="radio" name="color" value="red" id="red" className=""/>
            <label htmlFor="red">빨강</label>

            <input type="radio" name="color" value="blue" id="blue" />
            <label htmlFor="blue">파랑</label>

            <input type="radio" name="color" value="green" id="green" />
            <label htmlFor="green">초록</label>
            </div>;
}

Radio.propTypes = {
  /** How large should the radio be? */
  color : PropTypes.oneOf(['brand', 'neutral']),
  /** How large should the radio be? */
  size: PropTypes.oneOf(['md', 'lg']),
  /** Optional click handler */
  onClick: PropTypes.func,

  disabled : PropTypes.bool,
};

// Radio.defaultProps = {
//   color: 'brand',
//   size: 'md',
//   variant: 'contained',
//   onClick: undefined,
// };
