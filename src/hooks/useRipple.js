import { useEffect, useRef, useState } from 'react';

function useRipple({ centered = false, color = 'white' } = {}) {
  const [ripples, setRipples] = useState([]);
  const [focus, setFocus] = useState(null);

  const createRipple = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    let x, y;
    if (centered) {
      x = rect.width / 2 - size / 2;
      y = rect.height / 2 - size / 2;
    } else {
      x = event.clientX - rect.left - size / 2;
      y = event.clientY - rect.top - size / 2;
    }
    const newRipple = { x, y, size, key: Date.now(), released: false, color };
    setRipples((prev) => [...prev, newRipple]);
    return newRipple.key;
  };

  const releaseRipple = (key) => {
    setRipples((prev) =>
      prev.map(ripple =>
        ripple.key === key ? { ...ripple, released: true } : ripple
      )
    );
    setTimeout(() => {
      setRipples((prev) => prev.filter(ripple => ripple.key !== key));
    }, 600);
  };

  const activeRippleKey = useRef(null);

  const handleMouseDown = (e) => {
    activeRippleKey.current = createRipple(e);
  };

  const handleMouseUp = (e) => {
    if (activeRippleKey.current) {
      releaseRipple(activeRippleKey.current);
      activeRippleKey.current = null;
    }
  };

  const handleFocus = (e) => {
    console.log(e);
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    let x, y;
    x = rect.width / 2 - size / 2;
    y = rect.height / 2 - size / 2;
    const newRipple = { x, y, size };

    setFocus(newRipple);
  };

  const handleBlur = (e) => {
    setFocus(null);
  }

  const rippleContainer = (
    <div className="ripple-container" 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp} 
      onMouseLeave={handleMouseUp}
    >
      {focus && ripples.length == 0 &&
        <Ripple
          key={focus.key}
          x={focus.x}
          y={focus.y}
          size={focus.size}
          color={color}
          className={'focus'}
        />
      }
      {ripples.map(ripple => (
        <Ripple 
          key={ripple.key}
          x={ripple.x}
          y={ripple.y}
          size={ripple.size}
          released={ripple.released}
          color={ripple.color}
        />
      ))}
    </div>
  );

  return {handleFocus, handleBlur, rippleContainer};
}

const Ripple = ({ x, y, size, released, color, className }) => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpand(true), 10);
    return () => clearTimeout(timer);
  }, []);

  let cn = 'ripple ';
  if (expand) cn += className ? className : 'ripple-animation-start';
  if (released) cn += ' ripple-animation-end';
  
  cn += ` ripple-color-${color}`;

  return (
    <span
      className={cn}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
    />
  );
};

export default useRipple;

/**
* ripple-color-white
* ripple-color-black
* ripple-color-brand
* ripple-color-neutral
* ripple-color-error
* ripple-color-success
* ripple-color-warning
* ripple-color-info
 */