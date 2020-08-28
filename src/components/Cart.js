import React from "react";
import { connect } from "react-redux";

const Cart = ({ totalItems }) => {
  return <div> There are{totalItems} items in the cart</div>;
};
const mapStateToProps = (state) => {
  return { totalItems: state.totalitems };
};
export default connect(mapStateToProps)(Cart);
