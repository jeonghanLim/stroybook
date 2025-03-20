import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 사용자가 선택할 속성들
/** Primary UI component for user interaction */
export const List = ({ 
  dense, // 컴포넌트 간격 조정 (true 적용 시, 패딩과 마진 축소)
  disableGutter, // 좌우 패딩 조정 (true 적용 시, 패딩 삭제)
  startIcon,
  endIcon, 
  listItemText, // 기본 텍스트
  secondaryText, // 추가 텍스트
  listItemDivider, // 밑줄 여부
  disabled, 
  ...props 
}) => {  

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedClick = () => {
    setIsSelected(prev => !prev);
  };

  return (
    <div 
      aria-selected={isSelected ? 'true' : 'false'}      
      className={[
      'listItem',
      dense ? 'listItem-dense' : '',
      disableGutter ? 'listItem-gutter' : '',
      disabled ? 'listItem-disabled' : '',
      !disabled && isSelected ? 'bg-material-classicBlue-alpha-008' : '',
      ].filter(Boolean).join(' ')}      
      onClick={handleSelectedClick}
      {...props}
      >
      <div className='listItem-container'>
        <div className='listItem-base'>
          { startIcon &&
            <div className='listItem-icon'>{startIcon}</div>
          }
          <div className='listItem-text'>
            <div className="listItem-base-text">{listItemText}</div>
            { secondaryText &&
              <div className="listItem-secondary-text">{secondaryText}</div>
            }
          </div>
          { endIcon &&
            <div className='listItem-icon'>{endIcon}</div>
          }
          <div className='end-icon'></div>
        </div>
      </div>
      { listItemDivider &&
        <div className='listItem-divider'></div>
      }
    </div>
  );
};

List.propTypes = {
  /** Should the list item have a dense (compact) layout? */
  dense: PropTypes.bool,
  /** Should the list item have no gutter spacing? */
  disableGutter: PropTypes.bool,
  /** The icon to display at the start of the list item */
  startIcon: PropTypes.element,
  /** The icon to display at the end of the list item */
  endIcon: PropTypes.element,
  /** The main text of the list item */
  listItemText: PropTypes.string,
  /** The secondary text of the list item */
  secondaryText: PropTypes.string,
  /** Should the list item include a divider below it? */
  listItemDivider: PropTypes.bool,
  /** Should the list item be disabled? */
  disabled: PropTypes.bool,
};


List.defaultProps = {
  listItemText : "Menu Item",
  listItemDivider : true,
};
