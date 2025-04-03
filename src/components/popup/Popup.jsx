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
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mx-4 text-center animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{contents}</p>

        <div className="flex justify-center gap-3">
          <Button onClick={handleClick} className="px-4 py-2">
            {cancelBtnText}
          </Button>
          {hasOkBtn && (
            <Button
              onClick={handleClick}
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              {okBtnText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

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