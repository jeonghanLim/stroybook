import React from 'react';
import PropTypes from 'prop-types';

export const TextField = ({label}) => {

    return (
      <div>
        <div>{label}</div>
        <div className='textfield-base'>
          <input type='text' name='test'/>
        </div>
      </div>
    )
}


TextField.propTypes = {

};

TextField.defaultProps = {

};
