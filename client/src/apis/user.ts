import { current } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";

const userApi = {
  // getUser: async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/user/:uuid");
  //     const user = await response.json();
  //     return user;
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //     return error;
  //   }
  // },
  updateUser: async (user: User, data: any) => {
    console.log("in apis/user, user", user)
    try {
      const response = await fetch("http://localhost:5000/user/:uuid", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      return error;
    }
  },

};

export default userApi;
