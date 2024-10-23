import React from "react";
import ShoeItem from "./ShoeItem.jsx";
import "./styles.css";

function ShoeList({ shoes, deleteShoeHandler }) {
  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoe={shoe}>
            <button onClick={() => deleteShoeHandler(shoe.id)}>Delete</button>
        </ShoeItem>
      ))}
    </div>
  );
}

export default ShoeList;
