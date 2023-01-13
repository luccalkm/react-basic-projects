const reducer = (state, action) => {
  const removeCartItem = (cart) => {
    return cart.filter((item) => item.id !== action.payload)
  }

  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: removeCartItem(state.cart, action.payload),
      }
    case 'TOGGLE_AMOUNT':
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === 'inc') {
              return { ...cartItem, amount: cartItem.amount + 1 }
            }
            if (action.payload.type === 'dec') {
              return { ...cartItem, amount: cartItem.amount - 1 }
            }
          }
          return cartItem
        })
        .filter((cartItem) => cartItem.amount !== 0)
      return { ...state, cart: tempCart }

    // case 'INCREASE_ITEM':
    //   let increaseCart = state.cart.map((cartItem) => {
    //     if (cartItem.id === action.payload) {
    //       return {
    //         ...cartItem,
    //         amount: cartItem.amount + 1,
    //       }
    //     }
    //     return cartItem
    //   })
    //   return { ...state, cart: increaseCart }
    // case 'DECREASE_ITEM':
    //   let decreaseCart = state.cart
    //     .map((cartItem) => {
    //       if (cartItem.id === action.payload) {
    //         return {
    //           ...cartItem,
    //           amount: cartItem.amount - 1,
    //         }
    //       }
    //       return cartItem
    //     })
    //     .filter((cartItem) => cartItem.amount !== 0)
    //   return { ...state, cart: decreaseCart }
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          cartTotal.total += price * amount
          cartTotal.amount += amount
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'DISPLAY_ITEMS':
      return {
        ...state,
        cart: action.payload,
        loading: false,
      }
    default:
      throw new Error('No Matching Type')
  }
}

export default reducer
