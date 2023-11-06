import { combineReducers } from "redux";
import profile from "./profile/action";
import filter from "./filter/action";

const combinedReducer = combineReducers({
  profile,
  filter
});

export default combinedReducer;

export type State = ReturnType<typeof combinedReducer>;