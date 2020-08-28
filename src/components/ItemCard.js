import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ItemCard = ({ itemName, itemDesc }) => {
  return (
    <div
      style={{
        height: "40vh",
        width: "30vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink",
        flexWrap: "wrap",
        padding: "10px",
        border: "solid",
      }}
    >
      <h1> {itemName}</h1>
      <p> {itemDesc} </p>
      <button>
        Add to <FaCartPlus></FaCartPlus>{" "}
      </button>
    </div>
  );
};

export default ItemCard;
