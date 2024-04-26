import { current } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";

const userApi = {
  getUser: async () => {
    try {
      const response = await fetch("http://localhost:5000/user/:uuid");
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return error;
    }
  },
  updateUser: async (user: IUserState, data: any) => {
    console.log("in apis/user, user", user)
    try {
      const response = await fetch("http://localhost:5000/user/:uuid", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await response.json();
      // console.log("userApi.updateUser - user", user);
      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      return error;
    }
  },

};

export default userApi;
