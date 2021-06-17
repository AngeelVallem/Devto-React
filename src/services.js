const API_URL =
  "http://localhost:8080";


const postURL = `${API_URL}/posts`

// Requests
export const getPost = async () => {
  try {
    const response = await fetch(postURL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};


