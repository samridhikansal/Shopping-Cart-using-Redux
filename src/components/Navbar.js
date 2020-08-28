import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#d9534f",
        alignitems: "flex-end",
      }}
    >
      <h3 style={{ padding: "10px" }}>Shopping</h3>
      <ul style={{ listStyleType: "none", padding: "10px" }}>
        {" "}
        <li> Home</li>
      </ul>
      <ul style={{ listStyleType: "none", padding: "10px" }}>
        <li>
          <FaCartPlus />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
