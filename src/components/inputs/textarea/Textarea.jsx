import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Textarea = ({
  name
  , value
  , label
  , labelLeft = false
  , maxLength = 300
  , disabled = false
  , error = false
  , required = false
  , placeholder
  , helperText
  , onChange
  , readOnly = false
  , resizeable = true
  , autoHeight = true
  , setOverflowErrorMsg
  , ...props
}) => {

  const [currentLength, setCurrentLength] = useState(value ? value.length : 0);
  const [_helperText, setHelperText] = useState(helperText);
  const [_error, setError] = useState(error);

  const handleChange = (e) => {
    const target = e.target;
    let flag = true;

    if(target.value.length >= maxLength){
      const errorMsg = (setOverflowErrorMsg) ? setOverflowErrorMsg(maxLength) : `${maxLength}자 이내로 입력해 주세요.`;
      setError(true);
      setHelperText(errorMsg);
      flag = false;
    }
    
    resizing(target);
    setCurrentLength(target.value.length);

    if(flag) setError(error || false);
    (flag && onChange) && onChange(e);
  };

  const resizing = (target) => {
    if(autoHeight){
      target.style.height = 'auto';
      target.style.height = target.scrollHeight + 'px';
    }
  }

  return (
    <div className={`textarea-warpper ${labelLeft && 'left-label'} ${_error && 'error'} ${disabled && 'disabled'}`}>

      <div className={`textarea-label ${required && 'required'}`}>{label}</div>

      <div className={`textarea-base`}>
        <div className='flex'>
          <textarea 
            disabled={disabled}
            readOnly={readOnly}
            style={{ resize : resizeable && !disabled ? 'vertical' : 'none' }}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          >
            {value}
          </textarea>
        </div>

        <div className={`textarea-footer`}>
          <div className={`textarea-helper`}>
            {_helperText}
          </div>
          <div className={`textarea-length`}>
            {currentLength}/{maxLength}
          </div>
        </div>
      </div>
    </div>
  )
}

Textarea.propTypes = {
  name: PropTypes.string
  , value: PropTypes.string
  , label: PropTypes.string
  , labelLeft: PropTypes.bool
  , maxLength: PropTypes.string
  , disabled: PropTypes.bool
  , error: PropTypes.bool
  , required: PropTypes.bool
  , placeholder: PropTypes.string
  , helperText: PropTypes.string
  , onChange: PropTypes.func
  , readOnly: PropTypes.bool
  , resizeable: PropTypes.bool
  , autoHeight: PropTypes.bool
  , setOverflowErrorMsg : PropTypes.func
};

Textarea.defaultProps = {
  label: 'label'
  , labelLeft : false
  , maxLength : 300
  , disabled : false
  , error : false
  , required : false
  , readOnly : false
  , resizeable : true
  , autoHeight : true
};