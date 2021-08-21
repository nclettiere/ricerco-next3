import React, { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from './Sidebar.css';

const cx = classNames.bind(style);

function Sidebar() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className={cx('app-container')}>
      <div
        ref={sidebarRef}
        className={cx('app-sidebar')}
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className={cx('app-sidebar-content')} />
        <div
          className={cx('app-sidebar-resizer')}
          onMouseDown={startResizing}
        />
      </div>
      <div className={cx('app-frame')} />
    </div>
  );
}

export default Sidebar;
