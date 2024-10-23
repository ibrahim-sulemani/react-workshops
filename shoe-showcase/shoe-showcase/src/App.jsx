import "./App.css";
import React, { useState } from "react";
import ShoeList from "./components/ShoeList.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AddShoe from "./components/AddShoe.jsx";

function App() {
  const [shoes, setShoes] = useState([
    { id: 1, name: "Sneaker", price: 50, isExpensive: false, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 2, name: "Boot", price: 80, isExpensive: true, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 3, name: "Sandals", price: 30, isExpensive: false, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 4, name: "Loafers", price: 60, isExpensive: true, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 5, name: "Running Shoes", price: 90, isExpensive: true, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 6, name: "High Heels", price: 120, isExpensive: true, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 7, name: "Flip Flops", price: 15, isExpensive: false, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 8, name: "Wedges", price: 75, isExpensive: true, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 9, name: "Oxfords", price: 85, isExpensive: true, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
    { id: 10, name: "Clogs", price: 45, isExpensive: false, img: "https://www.buzzsneakers.mk/files/thumbs/files/images/slike-proizvoda/media/398/398203-02/images/thumbs_900/398203-02_900_900px.jpg" },
  ]);
  const [addForm, setAddForm] = useState(false);

  const deleteShoe = (id) => {
    const newShoes = shoes.filter((shoe) => shoe.id !== id);
    setShoes(newShoes);
  }

  const addShoe = (newShoe) => {
    const maxId = shoes.reduce((max, shoe) => (shoe.id > max ? shoe.id : max), 0);
    newShoe.id = maxId + 1;
    setShoes([...shoes, newShoe]);
    setAddForm(!addForm);
  }

  return (
    <div className="app">
      <Header />
      {addForm && <AddShoe addShoeHandler={addShoe}/>}
      {addForm || <button onClick={() => setAddForm(!addForm)}>Add Shoe</button>}

      <ShoeList shoes={shoes} deleteShoeHandler={deleteShoe}/>
      <Footer />
    </div>
  );
}
export default App;
