import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Menu = ({
  fullWidth = false // 전체 넓이 100% 설정 여부
  , dense = false // compact한 레이아웃 설정 여부
  , disableGutter = false // 좌우 패딩 삭제 여부
  , maxHeight // 최대 높이 적용(높이에 따라 스크롤바 적용됨)
  , startIcon
  , endIcon
  , label = 'Menu' // 메뉴아이템 라벨 텍스트
  , disabled = false // 비활성화
  , ...props
}) => {  

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedClick = () => {
    setIsSelected(prev => !prev);
  };

  const classProp = [
    fullWidth && 'menu-fullWidth'
    , dense && 'menu-dense'
    , disableGutter && 'menu-gutter'
    , disabled && 'menu-disabled'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div  
      aria-selected={isSelected ? 'true' : 'false'} 
      className={[
        'menu'
        , classProp
      ].filter(Boolean).join(' ')}
      onClick={handleSelectedClick}
      {...props}
    >
      <div className='menuItem'>
        <div className='menuItem-container'>
          <div className="menuItem-base">
            { startIcon &&
              <span className='menuItem-icon'>{startIcon}</span>
            }
            <p className='menuItem-label'>{label}</p>
            { endIcon &&
              <span className='menuItem-icon'>{endIcon}</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};


Menu.propTypes = {
  /** Menu 전체 넓이 100% 설정 여부 */
  fullWidth: PropTypes.bool,
  /** Menu 컴팩트한 레이아웃 설정 여부 */
  dense: PropTypes.bool,
  /** Menu 좌우 패딩 삭제 여부 */
  disableGutter: PropTypes.bool,
  /** Menu 최대 높이 적용 */
  maxHeight: PropTypes.string,
  /** MenuItem 앞쪽 아이콘 설정 */
  startIcon: PropTypes.element,
  /** MenuItem 뒷쪽 아이콘 설정 */
  endIcon: PropTypes.element,
  /** MenuItem 라벨(텍스트) */
  label: PropTypes.string,
};

Menu.defaultProps = {
  label: 'Menu',
};
