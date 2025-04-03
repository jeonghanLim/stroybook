import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/inputs/button/Button';

export const Popup = ({
  header
  , title
  , contents
  , cancelClick
  , cancelBtnText
  , okClick
  , okBtnText
  , hasCancelBtn = false
  , open = false
  , setOpen
  , ...props
}) => {

  const handleOkClick = (e) => {
    if (okClick && typeof okClick === 'function') okClick(e);
    setOpen(false);
  }

  const handleCancelClick = (e) => {
    if (cancelClick && typeof cancelClick === 'function') cancelClick(e);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="border rounded-lg p-6 shadow-md bg-white w-full max-w-md mx-auto">
      <div>
        {header}
      </div>
      <h2 className="text-lg font-medium mb-3">{title}</h2>
      <p className="text-gray-800 mb-5">{contents}</p>
      <div className="flex justify-center gap-3 mt-4"> 
        {hasCancelBtn && (
          <Button
            label='취소'
            variant='outlined'
            size='md'
            onClick={handleCancelClick}
          >
            {cancelBtnText}
          </Button>
        )}
        <Button
          label='확인'
          variant='outlined'
          size='md'
          onClick={handleOkClick}
        >
          {okBtnText}
        </Button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  contents: PropTypes.string,
  cancelClick: PropTypes.func,
  cancelBtnText: PropTypes.string,
  okClick: PropTypes.func,
  okBtnText: PropTypes.string,
  hasCancelBtn: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

Popup.defaultProps = {
  header: 'header',
  title: 'title',
  contents: 'contents',
  cancelBtnText: 'cancel',
  okBtnText: 'OK',
  hasCancelBtn: false,
  open: false,
};