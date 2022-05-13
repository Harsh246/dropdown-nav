import React, { useState } from "react";
import "./Navbar.css";

import logo from "../images/logo.svg";

import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";
import downArrow from "../images/icon-arrow-down.svg";
import upArrow from "../images/icon-arrow-up.svg";
import todo from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

export default function Navbar() {
  const [showMenu, setMenu] = useState(false);

  const [dropdown, setDropdown] = useState([false, false]);

  return (
    <div id="nav">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="hamburger-menu">
        <img src={menu} alt="menu" onClick={() => setMenu(true)} />
      </div>

      <div className={showMenu ? "hidden-menu" : "hidden"}>
        <div style={{ marginLeft: "auto" }}>
          <img onClick={() => setMenu(false)} src={closeMenu} alt="menu" />
        </div>
        <ul className="menu-list">
          <li
            onClick={() => {
              let newState = !dropdown[0];
              console.log(newState);
              setDropdown([newState, dropdown[1]]);
            }}
          >
            Features &nbsp;{"    "}
            {dropdown[0] ? (
              <img src={upArrow} alt="menu" onClick={() => setMenu(true)} />
            ) : (
              <img src={downArrow} alt="menu" onClick={() => setMenu(true)} />
            )}
          </li>

          <div className={dropdown[0] ? "menu-dropdown" : "none"}>
          <div className="menu-dropdown-item">
                <img alt="icon"  src={todo}/> <li>Todo List</li>
            </div>
            <div  className="menu-dropdown-item">
                <img  alt="icon" src={calender}/> <li>Calender</li>
            </div>
            <div className="menu-dropdown-item">
                <img  alt="icon" src={reminder}/> <li>Reminders</li>
            </div>
            <div className="menu-dropdown-item">
                <img  alt="icon" src={planning}/> <li>Planning</li>
            </div>
          </div>

          <li
            onClick={() => {
              let newState = !dropdown[1];
              console.log(newState);
              setDropdown([dropdown[0],newState ]);
            }}
          >
            Company &nbsp;{"    "}
            {dropdown[1] ? (
              <img   src={upArrow} alt="menu" onClick={() => setMenu(true)} />
            ) : (
              <img  src={downArrow} alt="menu" onClick={() => setMenu(true)} />
            )}
          </li>

          <div className={dropdown[1] ? "menu-dropdown" : "none"}>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
          </div>
          <li>Careers</li>

          <li>About</li>
        </ul>

        <div className="menu-btns">
          <div className="login-btn">
              Login
          </div>

          <div className="register-btn">
              Register
          </div>
        </div>
      </div>


      <div className="desktop-menu">

      <ul className="menu-list">
          <li className="dropdown-li">
            Features &nbsp;{"    "} <img className="drop-arrrow" src={downArrow} alt="menu" />
         <ul className="desktop-menu-dropdown">
          <div className="menu-dropdown-item">
                <img  alt="icon" src={todo}/><li>Todo list</li>
            </div>
            <div  className="menu-dropdown-item">
                <img alt="icon"  src={calender}/> <li>Calender</li>
            </div>
            <div className="menu-dropdown-item">
                <img  alt="icon" src={reminder}/> <li>Reminders</li>
            </div>
            <div className="menu-dropdown-item">
                <img  alt="icon" src={planning}/> <li>Planning</li>
            </div>
          </ul>    
          </li>

                      

          <li className="dropdown-li">
            Company &nbsp;{"    "} <img className="drop-arrrow" src={downArrow} alt="menu" />
         <ul className="desktop-menu-dropdown">
         <div  className="menu-dropdown-item">
              <li>History</li>
            </div>
            <div className="menu-dropdown-item">
              <li>Our Team</li>
            </div>
            <div className="menu-dropdown-item">
              <li>Blog</li>
            </div>
          
          </ul>    
          </li>

          {/* <div className={dropdown[1] ? "menu-dropdown" : "none"}>
         
          </div> */}
          <li>Careers</li>

          <li>About</li>
        </ul>

        <div className="menu-btns">
          <div className="login-btn">
              Login
          </div>

          <div className="register-btn">
              Register
          </div>
        </div>
        </div>


      <div className={showMenu ? "backdrop-blur" : "hidden"}></div>
    </div>
  );
}
