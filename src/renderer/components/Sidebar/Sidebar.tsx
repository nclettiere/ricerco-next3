import React, { useState, useRef } from 'react';

import classNames from 'classnames/bind';
import { Button, H5 } from '@blueprintjs/core';
import style from './Sidebar.css';

const cx = classNames.bind(style);

function Sidebar() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback(() => {
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
            sidebarRef.current?.getBoundingClientRect().left
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
    <div
      ref={sidebarRef}
      className={cx('app-sidebar')}
      style={{ width: sidebarWidth }}
      role="button"
      tabIndex={0}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className={cx('app-sidebar-content')}>
        <div className={cx('app-sidebar-titlebar')}>
          <H5 style={{ margin: 0, color: '#6f6f6f', fontWeight: 400 }}>
            Titlebar
          </H5>
          <Button minimal icon="cog" />
        </div>
      </div>
      <div
        className={cx('app-sidebar-resizer')}
        onMouseDown={startResizing}
        role="button"
        tabIndex={0}
        aria-label="" />
    </div>
  );
}

export default Sidebar;
