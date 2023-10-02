export const addtocart = (pizza, quantity, variant) => (dispatch, getState) => {
  var cartitem = {
    name: pizza.name,
    _id: pizza.id,
    image: pizza.image,
    variant: variant,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][variant] * quantity,
  };

  if (cartitem.quantity > 10) {
    alert("Sorry! Maximum 10 pizzas can be added to the Cart");
  } else {
    if (cartitem.quantity < 1) {
      dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: cartitem });
    }
  }

  const cartitems = getState().cartreducer.cartitems;
  localStorage.setItem('cartitems', JSON.stringify(cartitems));
};

export const deletefromcart = (pizza) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
  const cartitems = getState().cartreducer.cartitems;
  localStorage.setItem('cartitems', JSON.stringify(cartitems));
};
