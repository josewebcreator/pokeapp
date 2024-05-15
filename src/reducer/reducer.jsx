import actionTypes from "./actionTypes";


//creaccion del reducer... el reducer recibe el estado y la accion

//es en teoria el ejecutara las funciones que toquen todo el alcance de la aplicacion
export default function storeReducer (state,action) {

  switch(action.type){
    case actionTypes.SELECT_POKEMON:

      return{
        ...state,
        selection : action.payload
      }
    case actionTypes.CHANGE_LIST:
      return{
        ...state,
        limit : action.payload
      }

    default:
      return state;

  }

}