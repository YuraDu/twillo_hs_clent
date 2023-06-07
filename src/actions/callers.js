import * as api from "../api";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
} from "../consts/callersActionTypes";

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
export const createCaller = post => async dispatch => {
  try {
    const { data } = await api.createCaller(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update a caller
export const updateCaller = (id, caller) => async dispatch => {
  try {
    const { data } = await api.updateCaller(id, caller);
    dispatch({ type: UPDATE, payload: data });
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
