
export const getAllPosts = () => {
    return fetch(`https://dummyjson.com/posts`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };