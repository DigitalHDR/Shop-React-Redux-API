import handleCart from "./handleCart";
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  handleCart,
  //! pra adicionar outro tem que importar
})

export default rootReducers