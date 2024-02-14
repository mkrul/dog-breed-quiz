import { current } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";

const userApi = {
  getUser: async () => {
    try {
      const response = await fetch("http://localhost:5000/user/:ipAddress");
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return error;
    }
  },
  updateUser: async (user: IUserState, data: any) => {
    const currentUser = user;
    try {
      const doc = JSON.stringify(data)
      console.log("apis/user.ts - user", currentUser)
      console.log("apis/user.ts - document", doc)
      const response = await fetch("http://localhost:5000/user/:ipAddress", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: doc,
      });
      console.log("apis/user.ts - response", response)
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      return error;
    }
  }

};

export default userApi;
