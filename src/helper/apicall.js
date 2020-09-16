export const getPosts = () => {
  return fetch(`http://localhost:5000/api/v1/posts`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
