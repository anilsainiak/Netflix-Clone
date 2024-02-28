import React from 'react'
import "./topbar.css";
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Anil Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
              <NotificationsNone/>
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Language/>
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Settings/>
          </div>
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*9ldt4UL_uUGWTwnL8_XyLA.jpeg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
