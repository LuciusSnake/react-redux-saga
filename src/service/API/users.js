import axios from "axios";

export const getUsersApi = () => {
  // setLoading(true)
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.data;
    });
    // .catch(err => {console.log(err);})
    // .finally(() => { setLoading(false) })
};

export const createUsersApi = (data) => {
  return axios.post("https://jsonplaceholder.typicode.com/users", data)
    .then(response => {
      return response.data;
    })
};
