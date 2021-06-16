const API_URL =
  "https://taco-database-default-rtdb.firebaseio.com/user/users/devto/posts";

const postURL = (id) => `${API_URL}/${id}/.json`;

// Requests
export const getPost = async (id) => {
  try {
    const url = postURL(id);
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
