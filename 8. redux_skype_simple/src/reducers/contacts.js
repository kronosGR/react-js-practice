import { contacts } from "../static-data";
import { DELETE_CONTACT } from "../constants/action-types";

export default (state = { contacts }, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      const contactId = action.payload;
      const { [contactId]: deleted, ...newState } = state;
      return newState;
    default:
      return state;
  }
};
