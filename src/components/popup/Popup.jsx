import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/inputs/button/Button';

export const Popup = ({
  header
  , icon 
  , title
  , content
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
    <div className='popup-wrapper'>
      <div className='popup-header-wrapper'>
        <div className='popup-header-base'>
          <div className='popup-header-label'>
            {header}
          </div>
        </div>
      </div>
      <div className='popup-body-wrapper'>
        <div className='popup-body-base'>
          <span className='popup-icon'>{icon}</span>
          <div className='popup-body'>
            <p className='popup-title'>{title}</p>
            <p className='popup-content'>{content}</p>
          </div>
        </div>
      </div>
      <div className='popup-footer'>
        <div className='popup-divider'>
            {/* {divider} */}
        </div>
      <div className='popup-button'>
        {hasCancelBtn && (
          <Button
            label={cancelBtnText}
            onClick={handleCancelClick}
          />
        )}
        <Button
          label={okBtnText}
          onClick={handleOkClick}
        />
      </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  content: PropTypes.string,
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
  content: 'content',
  cancelBtnText: '취소',
  okBtnText: '확인',
  hasCancelBtn: false,
  open: false,
};