import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { connect } from "react-redux";

const ItemCard = ({ itemName, itemDesc, id, cart, addItem }) => {
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
      <h1>
        {" "}
        {itemName}
        {cart}
      </h1>
      <p> {itemDesc} </p>
      <button
        onClick={() => {
          addItem({ id });
        }}
      >
        Add to <FaCartPlus></FaCartPlus>{" "}
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.totalitems };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => dispatch({ type: "INCREMENT", id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
