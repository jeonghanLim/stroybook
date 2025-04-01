import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Menu = ({ 
  dense = false // 컴포넌트 간격 조정
  , disableGutter = false // 좌우 패딩 조정 (true 적용 시, 패딩 삭제)
  , startIcon
  , endIcon 
  , label = 'Menu' // 기본 텍스트
  , menuItemDivider = false // 밑줄 여부
  , disabled = false 
  , onClick
  , remainMenu // 클릭했을 때도 메뉴가 사라지지 않게 하는 속성 (기본은 사라지게 함)
  , ...props 
}) => {  

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedClick = () => {
    setIsSelected(prev => !prev);
  };

  const classProp = [
    dense && 'menuList-dense',
    disableGutter && 'menuList-gutter',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      aria-selected={isSelected ? 'true' : 'false'}      
      className={[
      'menuList'
      , classProp
      ].filter(Boolean).join(' ')}      
      onClick={handleSelectedClick}
      {...props}
    >
      <div 
        className={[
          'menuItem'
          , disabled ? 'menuItem-disabled' : ''
        ]}
      >
        <div className='menuItem-container'>
          <div className='menuItem-base'>
            { startIcon &&
              <span className='menuItem-icon'>{startIcon}</span>
            }
            <p className='menuItem-label'>{label}</p>
            { endIcon &&
              <span className='menuItem-icon'>{endIcon}</span>
            }
          </div>
        </div>
        { menuItemDivider && <Divider /> }
      </div>
    </div>
  );
};

Menu.propTypes = {
  /** Menu 간격 좁게(dense) 설정 여부 */
  dense: PropTypes.bool,
  /** Menu 좌우 패딩 삭제 여부 */
  disableGutter: PropTypes.bool,
  /** Menu 앞쪽 아이콘 설정  */
  startIcon: PropTypes.element,
  /** Menu 뒷쪽 아이콘 설정 */
  endIcon: PropTypes.element,
  /** MenuItem 기본 텍스트 */
  label: PropTypes.string,
  /** MenuItem 구분선 설정 여부 */
  menuItemDivider: PropTypes.bool,
  /** MenuItem 비활성화 설정 여부 */
  disabled: PropTypes.bool,
};


Menu.defaultProps = {
  label : 'Menu',
};

