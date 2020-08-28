const itemList = [
  { id: 1, itemName: "item1", desc: " loreum ipsum item1......" },
  { id: 2, itemName: "item2", desc: " loreum ipsum  item2......" },
  { id: 3, itemName: "item3", desc: " loreum ipsum  item3......" },
  { id: 4, itemName: "item4", desc: " loreum ipsum  item4......" },
];
const initialstate = { totalitems: 0, itemlist: itemList, cartItems: [] };

const cartReducer = (state = initialstate, action) => {
  console.log("hello");
  if (action.type === "INCREMENT") {
    console.log("hello I have enterd this fn");
    console.log(action.id);
    state.cartItems.push({ id: action.id });
    console.log(state.cartItems);
    state = { ...state, totalitems: state.cartItems.length };
    return state;
  }
  return state;
};

export default cartReducer;
