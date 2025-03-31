import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { TextField } from '../inputs/textField/TextField';

export const DateField = ({ 
  dense = false //이거는 사이즈!
  , color = 'brand' 
  , variant = ''    
  , disabled = false
  , required = false
  , error = false
  , label
  , placeholder = 'YYYY/MM/DD ~ YYYY/MM/DD'
  , helperText
  , endIcon
  , onChange 
  , ...dateFieldProps 
}) => {  

  // 체크 시 상태값
//   const [isChecked, setIsChecked] = useState(checked);

//   useEffect(()=>{
//     setIsChecked(checked);
//   },[checked])

  // 체크박스 선택 시 
//   const handleChange = (e) => {
//     console.log("-------- 개별 개별 체크", e.target.checked)
//     setIsChecked(e.target.checked);
//     onChange && onChange(e.target.checked, e.target.value);
//   };

  return (
   <div className={`datefield-wrapper`}>
    <TextField 
        dense={dense}
        disabled={disabled}
        required={required}
        error={error}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        endIcon={endIcon}>
    </TextField>
   </div>
  );
};

DateField.propTypes = {
  dense: PropTypes.bool
  , color : PropTypes.oneOf(['brand', 'neutral'])
  , variant : PropTypes.oneOf(['check', 'checkbox'])
  , disabled : PropTypes.bool
  , required: PropTypes.bool
  , indeterminate : PropTypes.bool
  , error : PropTypes.bool
  , label : PropTypes.string
  , placeholder: PropTypes.string
  , helperText: PropTypes.string
  , endIcon: PropTypes.element
  , onChange: PropTypes.func
};

DateField.defaultProps = {
  dense: false
  , color: 'brand'
  , variant: 'checkbox'
  , disabled: false
  , required: false
  , error: false
  , placeholder: 'YYYY/MM/DD'
  , helperText: 'HelperText'
};

/*

*/ 