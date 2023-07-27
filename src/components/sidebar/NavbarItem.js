import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavbarItem({ icon, text, User, size }) {
  return (
    <div>
      <button className=" transition-all nav-item-i my-2 h-14 mx-0.5 w-14 flex items-center justify-center p-2 rounded-full hover:rounded  ease-in-out duration-150 ">
        {icon ? (
          <img width={size? size : 27} className="my-1" src={icon} />
        ) : (
          <div className="text-3xl" style={{ color: "#6EEB83" }}>
            {User}
          </div>
        )}

        {/* <span>{text}</span> */}
      </button>
    </div>
  );
}

export default NavbarItem;
