import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../textField/Textfield';
import { Menu } from '@/components/navigation/menu/Menu';

export const Select = ({ 
  ...props 
}) => {  

  const menuItems = [
    {label: 'option1', value: 'option1'},
    {label: 'option2', value: 'option2'},
    {label: 'option3', value: 'option3'},
  ]

  return (
    <div className='select'>
      <TextField 
        label = "상단 라벨"
        placeholder= "placeholder"
      />
      <div className='menu-base'>
        <Menu 
          items={menuItems}
        />
      </div>
    </div>
  );
};


Select.propTypes = {

};

Select.defaultProps = {
};
