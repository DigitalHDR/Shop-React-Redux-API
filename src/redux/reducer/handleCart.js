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
        //! EXPLICAÇÃO DE { ...x, quantidade: x.quantidade - 1 }.
        //! ...x, isso é o espelhamento no caso esta vindo de state.
        //!
          
        // EXPLICAÇÃO QUE ME DEREAM ####################
        //! const x = { count: 0, name: 'Silas', id: 1 }
        //! const updateX = { ...x, count: x.count + 1 }
        // #############################################
        
        //! aqui, quantidade: ,é como se fosse um novo objeto.
        //! então dentro desse novo onbjeto vai ter o valor de x pegando a quantidade e adicionado + 1
          x.id === product.id ? { ...x, quantidade: x.quantidade + 1 } : x
        )
        } else {
          const product = action.payload
          return [
            ...state,
            {
              ...product,
              quantidade: 1,
            }
          ]
        }
    //! break; comentei pra sair um erro, não gerou outro erro, ok

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id)
      if (exist1.quantidade === 1) {
        return state.filter((x) => x.id !== exist1.id)
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantidade: x.quantidade - 1 } : x
        )
      }
    //! break; comentei pra sair um erro, não gerou outro erro, ok

    default:
      return state
    //! break; comentei pra sair um erro, não gerou outro erro, ok
  }
}

export default handleCart