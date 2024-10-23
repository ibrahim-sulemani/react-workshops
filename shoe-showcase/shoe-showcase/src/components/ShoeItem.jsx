import React from "react";
import "./styles.css";

function ShoeItem({ shoe, children }) {
  const priceClass = shoe.price > 60 ? "expensive" : "affordable";
  return (
    <div className={`shoe-item ${priceClass}`}>
      <img className="shoe-img" src={shoe.img} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>#ID: {shoe.id}</p>
      <p>Price: ${shoe.price}</p>
      {children}
    </div>
  );
}

export default ShoeItem;
