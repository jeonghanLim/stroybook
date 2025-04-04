import React from "react";
import PropTypes from 'prop-types';
import { Radio } from "./Radio";
import { useEffect, useState } from "react";
export const RadioGroup = ({
      title
      , name
      , flex
      , options
      , color
      , size
      , onChange
      , required = false
      , disabled = false
      , helperText
      , errorText
      , children
    }) => {
  const radioSizeClassName = size === "lg" ? "radio-size-lg" : "radio-size-md";

  const radioFlexClassName = flex === 'column' ? 'radio-flex-column' : 'radio-flex-row';

  const radioDisableClassName = disabled ? "radio-disable" : errorText ? 'radio-error' : '';
  
  const [ colorVar, setColorVar ] = useState(color);
  useEffect(()=>{
    if(errorText) {
      setColorVar('error');
    } else {
      setColorVar(color);
    }
  }, [errorText])

  return <div className={['radio-group',radioSizeClassName, radioDisableClassName].join(' ')}>  {/* 제목과 라디오 그룹을 묶는다 */}
    <p className="radio-title">{title}</p>
    <div className={radioFlexClassName}> {/* 라디오 옵션들을 묶는다. flex 방식 지정 */}
        {options.map((item, index) => (
          <Radio key={index} name={name} label={item.label} value={item.value} disabled={disabled} checked={item.checked} color={colorVar} onChange={onChange}/>
        ))}
        {children}
    </div>
    <p className={["radio-sub-text"]}>{errorText ? errorText : helperText}</p>
    
  </div>;
}

RadioGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  flex: PropTypes.oneOf(['column', 'row']),
  options: PropTypes.array,
  color: PropTypes.oneOf(['brand', 'neutral']),
  size: PropTypes.oneOf(['md', 'lg']),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disableed: PropTypes.bool,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
};

RadioGroup.defaultProps = {
  flex: 'column',
  color: 'brand',
  size: 'md',
};
