import React from "react";
import NavbarHome from "./NavbarHome";
import "./Style.css";
function home() {
  return (
    <>
      <div className="header">
        Delivery slots are fully booked for 19 June. Latest pickup by 6pm.
      </div>
      <NavbarHome />
    </>
  );
}

export default home;
