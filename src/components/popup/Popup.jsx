import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../inputs/button/Button';

export const Popup = ({
  title
  , contents
  , cancelBtnText
  , okBtnText
  , hasOkBtn = false
  , onClick
  , ...props
}) => {

  const handleClick = (e) => {
    onClick && onClick(e);
  }

  return (

    <div className='popup-base'>
      <p>{title}</p>
      <p>{contents}</p>

      <div className='popup-btn'>
        <Button
          onClick={handleClick}
        >
          {cancelBtnText}
        </Button>
        {hasOkBtn && (
          <Button
            onClick={handleClick}
          >
            {okBtnText}
          </Button>
        )}
      </div>
    </div>
  )
}

Popup.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  cancelBtnText: PropTypes.string,
  okBtnText: PropTypes.string,
  hasOkBtn: PropTypes.bool,
};

Popup.defaultProps = {
  title: 'title',
  contents: 'contents',
  cancelBtnText: 'cancel',
  okBtnText: 'OK',
  hasOkBtn: false,
};