import { current } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";

const dogsApi = {
  getDogs: async () => {
    try {
      // const response = await fetch("http://localhost:5000/dogs", {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const data = await response.json();
      // return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  },

};

export default dogsApi;
