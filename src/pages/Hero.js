import React from "react";
import { bsTruck } from "react-icons/bs";
import { AiOutlineSmile, AiOutlineHeart } from "react-icons/ai";
import { CgAwards } from "react-icons/cg";

const Hero = () => {
  const Data = [
    {
      id: 1,
      name: "Delivery to PJ/KL (within 50km)",
      image:
        "data:image/png;base64,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",
      desc: "Free delivery available*",
    },
    {
      id: 2,
      name: "Preorder Basis",
      image: "",
      desc: "Freshness Guaranteed",
    },
    {
      id: 3,
      name: "Finest Ingredients",
      image: "",
      desc: "100% Halal, No Alcohol",
    },
    {
      id: 4,
      name: "Award Winning Chef",
      image: "",
      desc: "Champion of 2016 Asian Pastry Cup",
    },
  ];
  return (
    <div className="h-100">
      <div className="">
        <img
          src="https://cdn.shopify.com/s/files/1/0040/2305/8561/files/2022-fathers-day-edition-black-forest-slider_2100x.jpg?v=1654338238"
          alt="..."
          className=" w-100"
          style={{ objectFit: "cover", position: "absolute", zIndex: "-1" }}
        />
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
      <div className="container d-flex">
        {Data.map((item) => (
          <div key={item.id}>
            <div className="card text-center" style={{ width: "17rem" }}>
              <div className="card-body mt-4">
                <h2 className="card-title mb-4">{item.name}</h2>
                <h6 className="card-subtitle mb-2 text-bold">{item.desc}</h6>
                <div className="d-flex justify-content-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt="..."
                      className=" w-100"
                      style={{
                        height: "62vh",
                        objectFit: "cover",
                        position: "absolute",
                        zIndex: "-1",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
