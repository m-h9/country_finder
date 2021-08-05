import axios from "axios";

const UseApi = () => {
  const url = "https://restcountries.eu/rest/v2";
  return {
    get: async (endpoint) => {
      try {
        const { data } = await axios.get(`${url}${endpoint}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default UseApi;
