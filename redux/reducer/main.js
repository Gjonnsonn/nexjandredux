import * as t from "../types";

const main = (
  state = {
    userInfo: {
      name: "guest",
    },
  },
  action
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        userInfo: {
          name: acton.payload,
        },
      };
    default:
      return { ...state };
  }
};

export default main;
