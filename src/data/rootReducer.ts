import userReducer from "./user/reducer";
import appReducer from "./application/reducer";

const rootReducer = {
  user: userReducer,
  app: appReducer,
};

export default rootReducer;
