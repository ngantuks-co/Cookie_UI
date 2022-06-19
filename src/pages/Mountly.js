import React from "react";
import "./Style.css";

const Mountly = () => {
  const Data = [
    {
      id: 1,
      name: "Valrhona Caraibe Hazelnut Praline",
      image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/products/valrhona-caraibe-hazelnut-praline-01_3646be8b-1afe-4aec-8b90-5824445c1d9c_300x.jpg?v=1644764724",
      price: "RM 115.00",
    },
    {
      id: 2,
      name: "Uji Matcha Tart",
      image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/products/uji-matcha-tart-01_300x.jpg?v=1646536413",
      price: "RM 105.00",
    },
    {
      id: 3,
      name: "Citron Tart",
      image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/products/citron-tart-01_300x.jpg?v=1644764918",
      price: "RM 82.00",
    },
    {
      id: 4,
      name: "Kochi Yuzu Mango Tart",
      image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/products/kochi-yuzu-mango-tart-01_a44ff425-3b2a-4a41-b22c-92c7badc8310_300x.jpg?v=1644764856",
      price: "RM 120.00",
    },
  ];
  return (
    <div className="container mb-4" style={{ marginTop: "50px" }}>
      <h1 className="d-flex justify-content-center mb-5">Mounthly Bestsellers</h1>
      <div className="scale-up-ver-bottom d-flex gap-3 ">
        {Data.map((item) => (
          <div key={item.id}>
            <img className="img-thumbnail" src={item.image} alt={item.name} />
            <div className="text-center mt-3">
              <p className="mb-0">{item.name}</p>
              <p className="mt-0">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mountly;
