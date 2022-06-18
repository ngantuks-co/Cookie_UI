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
      <div className="row">
        <img
          src="https://cdn.shopify.com/s/files/1/0040/2305/8561/files/2022-fathers-day-edition-black-forest-slider_1500x.jpg?v=1654338238"
          className="w-100"
          style={{ height: "100vh", maxWidth: "100%" }}
        />
      </div>
      {/* Image Card */}
      <div className="row">
        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/whole-cake_300x.jpg?v=1641461225"
              class="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>

      {/* end image  */}
    </>
  );
}

export default home;
