const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload

  switch (action.type) {
    case "ADDITEM":
      //!Verifique se o produto já existe
      const exist = state.find((x) => x.id === product.id)

      if (exist) {
        //!Aumentar a quantidade
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,
          }
        ]
      }
    //! break; comentei pra sair um erro, não gerou outro erro, ok

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id)
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        )
      }
    //! break; comentei pra sair um erro, não gerou outro erro, ok

    default:
      return state
    //! break; comentei pra sair um erro, não gerou outro erro, ok
  }
}

export default handleCart