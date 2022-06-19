import React from "react";

const Location = () => {
  return (
    <div>
      <div className="">
        <img
          src="https://cdn.shopify.com/s/files/1/0040/2305/8561/files/storefront_65175bc7-c865-4345-aaf3-7159a050bfce_2100x.jpg?v=1617550765"
          alt="..."
          className=" w-100"
          style={{ height: "62vh", objectFit: "cover", position: "absolute", zIndex: "-1" }}
        />
        <div className="pt-4 ps-4 ">
          <div class=" card text-center" style={{ width: "17rem" }}>
            <div class="card-body mt-4">
              <h2 class="card-title mb-4">Our Location</h2>
              <h6 class="card-subtitle mb-2 text-bold">Lachér Patisserie</h6>
              <p class="card-text">
                A-1-11, Eve Suite, Jalan PJU 1A/41, Ara Damansara, 47301, Petaling Jaya, Selangor.
              </p>
              <h6 class="card-subtitle mb-2 text-bold mt-3">Delivery & Pickup ONLY</h6>
              <p class="card-text">(No dine-in/walk-in) Mon - Sun, 11am - 6pm</p>
              <button className="btn btn-danger mt-3">Pickup Location</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
