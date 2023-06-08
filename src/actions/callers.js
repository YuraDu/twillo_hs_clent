import * as api from "../api";
import { POST, DELETE, FETCH_ALL, PATCH } from "../consts/callersActionTypes";

// Action creators

// Fetch all callers
export const getCallers = () => async dispatch => {
  try {
    const { data } = await api.fetchCallers();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Create a new caller
export const createCaller = caller => async dispatch => {
  try {
    const { data } = await api.createCaller(caller);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update a caller
export const updateCaller = (id, caller) => async dispatch => {
  try {
    const { data } = await api.updateCaller(id, caller);
    console.log("🚀 ~ file: callers.js:30 ~ updateCaller ~ caller:", caller)
    dispatch({ type: PATCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Delete a caller
export const deleteCaller = id => async dispatch => {
  try {
    await api.deleteCaller(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
