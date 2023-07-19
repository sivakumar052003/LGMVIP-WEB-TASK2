const fetchUsersfromAPI = () => {
  const API = "https://reqres.in/api/users?page=1";
  return fetch(API)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      console.error(error);
      throw new Error("Failed to fetch users.");
    });
};

export default fetchUsersfromAPI;
