import React from 'react'
import {  Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="menu-item active">
        <span><i className="uil uil-home"></i></span>
        <h3>Home</h3>
    </div>
    <div className="menu-item">
        <span><i className="uil uil-compass"></i></span>
        <h3>Explore</h3>
    </div>
    <div className="menu-item" id="notifications">
        <span><i className="uil uil-bell"><small className="notification-count">9+</small></i></span>
        <h3>Notifications</h3>
        {/* Notifications popups */}
        <div className="notifications-popup">
            <div>
                <div className="profile-picture">
                    <img src="images/chahat.jpg" alt="" />
                </div>
                <div className="notification-body">
                    <b>Chahat</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-picture">
                    <img src="images/chakshu.jpg" alt="" />
                </div>
                <div className="notification-body">
                    <b>Chakshu</b> commented on your post
                    <small className="text-muted">1 HOUR AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-picture">
                    <img src="images/parth.jpg" alt="" />
                </div>
                <div className="notification-body">
                    <b>Parth</b> tagged you in a post
                    <small className="text-muted">1 DAY AGO</small>
                </div>
            </div>
            <div>
                <div className="profile-picture">
                    <img src="images/anisha.jpg" alt="" />
                </div>
                <div className="notification-body">
                    <b>Anisha</b> posted a new photo
                    <small className="text-muted">2 DAYS AGO</small>
                </div>
            </div>
        </div>
    </div>
    <Link to="/messenger"  className="menu-item" id="messages-notification">
        <span><i className="uil uil-envelope-alt"><small className="notification-count">4</small></i></span>
        <h3>Message</h3>
    </Link>
    <div className="menu-item">
        <span><i className="uil uil-bookmark"></i></span>
        <h3>Bookmarks</h3>
    </div>
    <div className="menu-item">
        <span><i className="uil uil-chart-line"></i></span>
        <h3>Analytics</h3>
    </div>
    <div className="menu-item" id="theme">
        <span><i className="uil uil-palette"></i></span>
        <h3>Theme</h3>
    </div>
    <div className="menu-item">
        <span><i className="uil uil-setting"></i></span>
        <h3>Settings</h3>
    </div>
</div>
  )
}

export default Sidebar