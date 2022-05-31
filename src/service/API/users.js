import axios from "axios";

export const getUsers = () => {
  // setLoading(true)
  return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.data;
    });
    // .catch(err => {console.log(err);})
    // .finally(() => { setLoading(false) })
};
