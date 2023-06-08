import axios from "axios";


// Create an instance of axios with the base URL


// Fetch all callers
export const fetchCallers = () => axios.get("http://localhost:3000/callers");

// Create a new caller
export const createCaller = newCaller =>
  axios.post("http://localhost:3000/callers", newCaller);

// Update a caller by ID
export const updateCaller = (id, updatedCaller) =>
  axios.patch(`http://localhost:3000/callers/${id}`, updatedCaller);

// Delete a caller by ID
export const deleteCaller = id => axios.delete(`http://localhost:3000/callers/${id}`);
