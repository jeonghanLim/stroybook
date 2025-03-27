import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Divider } from '../divider/Divider';

export const List = ({ 
  dense = false // 컴포넌트 간격 조정
  , disableGutter = false // 좌우 패딩 조정 (true 적용 시, 패딩 삭제)
  , startIcon
  , endIcon 
  , listItemText = "Menu Item" // 기본 텍스트
  , secondaryText // 추가 텍스트
  , listItemDivider = true // 밑줄 여부
  , disabled = false 
  , onClick
  , ...props 
}) => {  

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedClick = () => {
    setIsSelected(prev => !prev);
  };

  const classProp = [
    dense && 'listItem-dense',
    disableGutter && 'listItem-gutter',
    disabled && 'listItem-disabled'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      aria-selected={isSelected ? 'true' : 'false'}      
      className={[
      'listItem'
      , classProp
      , !disabled && isSelected ? 'bg-material-classicBlue-alpha-008' : ''
      ].filter(Boolean).join(' ')}      
      onClick={handleSelectedClick}
      {...props}
    >
      <div className='listItem-container'>
        <div className='listItem-base'>
          { startIcon &&
            <span className='listItem-icon'>{startIcon}</span>
          }
          <div className='listItem-text'>
            <p className="listItem-base-text">{listItemText}</p>
            { secondaryText &&
              <p className="listItem-secondary-text">{secondaryText}</p>
            }
          </div>
          { endIcon &&
            <span className='listItem-icon'>{endIcon}</span>
          }
        </div>
      </div>
      { listItemDivider &&
        <Divider />
      }
    </div>
  );
};

List.propTypes = {
  /** List 간격 좁게(dense) 설정 여부 */
  dense: PropTypes.bool,
  /** List 좌우 패딩 삭제 여부 */
  disableGutter: PropTypes.bool,
  /** List 앞쪽 버튼 설정  */
  startIcon: PropTypes.element,
  /** List 뒷쪽 버튼 설정 */
  endIcon: PropTypes.element,
  /** List 기본 텍스트 */
  listItemText: PropTypes.string,
  /** List 추가 텍스트*/
  secondaryText: PropTypes.string,
  /** List 구분선 설정 여부 */
  listItemDivider: PropTypes.bool,
  /** List 비활성화 설정 여부 */
  disabled: PropTypes.bool,
};


List.defaultProps = {
  listItemText : "Menu Item",
  listItemDivider : true,
};
