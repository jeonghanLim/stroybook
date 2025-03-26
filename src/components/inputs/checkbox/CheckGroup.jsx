import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';

export const CheckGroup = ({ 
  size = 'md'
  , color = 'brand' 
  , title
  , label
  , name
  , helperText
  , errorText
  , checkboxOptions
  , onChange
  , ...checkboxProps 
}) => {  

  // 선택된 체크박스 value. 상태값
  const [ selectCheckboxList, setSelectCheckboxList ] = useState([]);

  // 개별 체크박스 선택 시
  const handlesingleChecked = (checked, value) => {
    console.log("-------- 그룹 개별 체크", checked )
    if(checked){
      setSelectCheckboxList([...selectCheckboxList, value]);
    }
    else {
      setSelectCheckboxList(selectCheckboxList.filter(i => i !== value))
    }

    onChange && onChange(selectCheckboxList)
  }

  // 전체 체크 선택 시
  const handleallChecked = (checked) => {
    console.log("-------- 그룹 전체 체크", checked)
    if(checked) {
      setSelectCheckboxList(checkboxOptions.map((item) => item.value));
    }
    else {
      setSelectCheckboxList([]);
    }
  }

  useEffect(() => {
    onChange && onChange(selectCheckboxList)
  }, [selectCheckboxList, onChange])

  const isAllChecked = selectCheckboxList.length === checkboxOptions.length && checkboxOptions.length > 0
  const indeterChecked = selectCheckboxList.length > 0 && selectCheckboxList.length < 6;

  return (
    <div className={`checkGroup-wrapper checkGroup-size-${size}`}>
      <p className={`checkGroup-title ${errorText ? 'error' : ''}`}>{title}</p>
      <div className={'checkGroup-allChecked'}>
        <Checkbox 
          checked={isAllChecked || indeterChecked} 
          indeterminate={indeterChecked} 
          label={label} 
          size={size} 
          color={color} 
          name={name}
          error={errorText ? true : false} 
          onChange={(e) => handleallChecked(e)}
        ></Checkbox>
      </div>
      <div className={'checkGroup-checked'}>
        {checkboxOptions.map((item) => (
          <div key={item.label} className={'checkGroup-item'}>
            <Checkbox 
              checked={selectCheckboxList.includes(item.value) ? true : false} 
              label={item.label} 
              size={size} 
              value={item.value} 
              color={color} 
              name={name}
              error={errorText ? true : false} 
              onChange={handlesingleChecked}
            ></Checkbox>
          </div>
        ))}
      </div>
      <p className={`checkGroup-helptext ${errorText ? 'error' : ''}`}>{errorText ? errorText : helperText}</p>
    </div>
  );
};


CheckGroup.propTypes = {
  size: PropTypes.oneOf(['md', 'lg']),
  color : PropTypes.oneOf(['brand', 'neutral']),
  title : PropTypes.string,
  label : PropTypes.string,
  helperText : PropTypes.string,
  errorText : PropTypes.string,
  checkboxOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
};

CheckGroup.defaultProps = {
  size: 'md',
  color: 'brand',
};

/*
checkGroup-size-md
checkGroup-size-lg
text-color-error
*/ 