import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';

export const CheckGroup = ({ 
  size = 'md',
  title,
  label,
  helperText,
  checkboxOptions,
  color = 'brand', 
  onChange, 
  ...checkboxProps 
}) => {  

  //선택된 체크박스 value. 상태값
  const [ selectCheckbox, setSelectCheckbox ] = useState([]);

  // 개별 체크박스 선택 시
  const singleCheckedhandle = (checked, value) => {
    console.log("-------- 그룹 개별 체크", checked )
    if(checked){
      setSelectCheckbox([...selectCheckbox, value]);
    }
    else {
      setSelectCheckbox(selectCheckbox.filter(i => i !== value))
    }
    onChange && onChange(selectCheckbox);
  }

  //전체 체크 선택 시
  const allCheckedhandle = (checked) => {
    console.log("-------- 그룹 전체 체크", checked)
    if(checked) {
      setSelectCheckbox(checkboxOptions.map((item) => item.value));
    }
    else {
      setSelectCheckbox([]);
    }
  }

  useEffect(() => {
    onChange && onChange(selectCheckbox)
  }, [selectCheckbox, onChange])

  const isAllChecked = selectCheckbox.length === checkboxOptions.length && checkboxOptions.length > 0
  const indeterChecked = selectCheckbox.length > 0 && selectCheckbox.length < 6;

  return (
    <div className={`checkGroup-wrapper checkGroup-size-${size}`}>
      <h2 className={'checkGroup-title'}>{title}</h2>
      <div className={'checkGroup-allChecked'}>
        <Checkbox checked={isAllChecked || indeterChecked} indeterminate={indeterChecked} label={label} size={size} color={color} onChange={(e) => allCheckedhandle(e)}></Checkbox>
      </div>
      <div className={'checkGroup-checked'}>
        {checkboxOptions.map((item) => (
          <div key={item.label} className={'checkGroup-item'}>
            <Checkbox label={item.label} size={size} value={item.value} color={color} checked={selectCheckbox.includes(item.value) ? true : false} onChange={singleCheckedhandle}></Checkbox>
          </div>
        ))}
      </div>
      <h5 className={'checkGroup-helptext'}>{helperText}</h5>
    </div>
  );
};


CheckGroup.propTypes = {
  size: PropTypes.oneOf(['md', 'lg']),
  color : PropTypes.oneOf(['brand', 'neutral']),
  variant : PropTypes.oneOf(['check', 'checkbox']),
  disabled : PropTypes.bool,
  checked : PropTypes.bool,
  indeterminate : PropTypes.bool,
  checkIcon : PropTypes.element, 
  checkText : PropTypes.string,
  onChange: PropTypes.func,
};

CheckGroup.defaultProps = {
  size: 'md',
  color: 'brand',
  variant: 'checkbox',
  disabled: false,
  checked: false,
  indeterminate: false,
  onClick: undefined,
};

/*
checkGroup-size-md
checkGroup-size-lg
*/ 