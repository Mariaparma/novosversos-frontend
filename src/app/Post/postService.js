const API_URL = process.env.REACT_APP_API_URL + "/posts";

export const getPosts = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export const createPost = async (post) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
};
