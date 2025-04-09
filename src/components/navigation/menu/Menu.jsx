import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Divider } from '../../dataDisplay/divider/Divider';

export const Menu = ({
  fullWidth = false // 전체 넓이 100% 설정 여부
  , dense = false // compact한 레이아웃 설정 여부
  , disableGutter = false // 좌우 패딩 삭제 여부
  , maxHeight // 최대 높이 적용(높이에 따라 스크롤바 적용됨) : px이 기본값으로, 숫자만 작성하도록
  , items = [] // 메뉴 아이템 목록
  , menuItemDivider = false // 디바이더 적용 여부
  , disabled = false // 비활성화(각 아이템마다 적용 가능)
  , onClick
  , ...props
}) => {  

  const [isSelected, setIsSelected] = useState(null);

  const handleSelectedClick = (index) => {
    setIsSelected(prev => (prev === index ? null : index));
  };

  const classProp = [
    fullWidth && 'menuList-fullWidth',
    dense && 'menuList-dense',
    disableGutter && 'menuList-gutter',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div   
      className={[ 
        'menuList'
        , classProp 
      ].filter(Boolean).join(' ')}
      {...props}
      style={{
        ...(maxHeight && {
          maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : ''
        })
      }}
    >
      {items.map(({ 
        label
        , value
        , startIcon
        , endIcon 
      }
        , index
      ) => (
        <div 
          key={value} 
          className={[
            'menuItem'
            , isSelected === index ? 'menuItem-selected' : ''
            , disabled ? 'menuItem-disabled' : ''
          ].filter(Boolean).join(' ')}
          onClick={() => handleSelectedClick(index)}
        >
          <div className="menuItem-container">
            <div className="menuItem-base">
              { startIcon && 
                <div className="menuItem-mask-box">
                  <div className="icon-box">
                    {startIcon}
                  </div>
                </div>
              }
              <p className="menuItem-label">{label}</p>
              { endIcon && 
                <div className="menuItem-mask-box">
                  <div className="icon-box">
                    {endIcon}
                  </div>
                </div>
              }
            </div>
          </div>
          { menuItemDivider &&
            <Divider />
          }
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  fullWidth: PropTypes.bool,
  dense: PropTypes.bool,
  disableGutter: PropTypes.bool,
  maxHeight: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    startIcon: PropTypes.element,
    endIcon: PropTypes.element
  })),
  menuItemDivider : PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Menu.defaultProps = {
  label: 'Menu',
};
