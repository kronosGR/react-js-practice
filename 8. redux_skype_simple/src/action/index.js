import { DELETE_CONTACT, SET_ACTIVE_USER_ID } from "../constants/action-types";

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const deleteContact = (user_id) => ({
  type: DELETE_CONTACT,
  payload: user_id,
});
