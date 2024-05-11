import { createContext, useReducer } from "react";
import storeReducer from "../reducer/reducer";
import { initialState } from "../reducer/initalState";
//se crea el contexto
const StoreContext = createContext();
//se crea el provider
function StoreProvider({children}) {
  //Se almacena el reductor en un state importante usar el Hook useReducer y se almacena el estado inicial de la aplicacion
  //adicionalmente storeReducer es el reducer utilizado
  //dispatch es la funcion de actualizacion
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return(
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )

}

export { StoreContext };
export default StoreProvider;