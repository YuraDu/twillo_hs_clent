import { DELETE, FETCH_ALL, POST, PATCH } from "./../consts/callersActionTypes";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case POST:
      return [...posts, action.payload];
    case PATCH:
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter(post => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
