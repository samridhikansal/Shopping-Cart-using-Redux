import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { connect } from "react-redux";

const Home = ({ itemState }) => {
  const items = [
    { id: 1, itemName: "item1", desc: " loreum ipsum item1......" },
    { id: 2, itemName: "item2", desc: " loreum ipsum  item2......" },
    { id: 3, itemName: "item3", desc: " loreum ipsum  item3......" },
    { id: 4, itemName: "item4", desc: " loreum ipsum  item4......" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {console.log(itemState)}
      {items.map((item) => {
        return (
          <div style={{ display: "flex", margin: "20px" }}>
            {" "}
            <ItemCard
              key={item.id}
              itemName={item.itemName}
              itemDesc={item.desc}
              id={item.id}
            ></ItemCard>{" "}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { itemState: state.totalItems };
};
export default connect(mapStateToProps, null)(Home);
