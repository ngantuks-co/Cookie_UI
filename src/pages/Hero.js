import React from "react";

const Hero = () => {
  return (
    <div className="h-100">
      <div className="">
        <img src="https://cdn.shopify.com/s/files/1/0040/2305/8561/files/2022-fathers-day-edition-black-forest-slider_2100x.jpg?v=1654338238" alt="..." className=" w-100" style={{ objectFit: "cover", position: "absolute", zIndex: "-1" }} />
        <div className=" ps-4" style={{ paddingTop: "500px" }}>
          <div>
            <div class="card-body mt-4">
              <h6 class="card-title">New Limited Edition</h6>
              <h2 class="card-subtitle mb-3 text-bold">2022 Father's day Edition - Black Forest</h2>
              <button className="btn btn-danger">Sold Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
