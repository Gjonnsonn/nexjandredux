import { combineReducer } from "redux";
import main from "./main";

const rootReducer = combineReducer({
  main: main,
});

export default rootReducer;
