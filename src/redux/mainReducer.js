import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn44106994Reducer from '../features/SignIn44106994/redux/reducers'
import Dashboard18106991Reducer from '../features/Dashboard18106991/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn44106994: SignIn44106994Reducer,
Dashboard18106991: Dashboard18106991Reducer,

});