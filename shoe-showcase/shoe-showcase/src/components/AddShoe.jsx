import React, { useState } from "react";
import "./styles.css";

function AddShoe({addShoeHandler}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const img="https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg";

    const addShoe = () => {
      addShoeHandler({name, price, img});
      setName("");
      setPrice(0);
    }

  return (
    <div>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button onClick={addShoe}>Add Shoe</button>
    </div>
  );
}

export default AddShoe;
