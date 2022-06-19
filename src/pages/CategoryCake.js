import React from "react";

const CategoryCake = () => {
  const Data = [
    {
      id: 1,
      name: "Whole Cake",
      Image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/whole-cake_300x.jpg?v=1641461225",
    },
    {
      id: 2,
      name: "Individual Cake",
      Image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/individual-dessert_300x.jpg?v=1641461226",
    },
    {
      id: 3,
      name: "Limited Edition",
      Image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/limited-edition_300x.jpg?v=1649837060",
    },
    {
      id: 4,
      name: "Add-Ons",
      Image:
        "https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/add-ons_300x.jpg?v=1641461224",
    },
  ];
  return (
    <div className="container mb-4" style={{ marginTop: "250px" }}>
      <div className="d-flex gap-3">
        {Data.map((item) => (
          <div key={item.id}>
            <img className="img-thumbnail" src={item.Image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCake;
