import React from "react";
import ItemCard from "./ItemCard";

const Home = () => {
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
      {items.map((item) => {
        return (
          <div style={{ display: "flex", margin: "20px" }}>
            {" "}
            <ItemCard
              key={item.id}
              itemName={item.itemName}
              itemDesc={item.desc}
              x
            ></ItemCard>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
