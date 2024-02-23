// import { current } from "@reduxjs/toolkit";
// import { IUserState } from "../interfaces/user";

const userApi = {
  createUser: async (ipAddress: string) => {
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ipAddress }),
      });

      if (response.status === 201) {
        return await response.json();
      } else {
        throw new Error("Error creating user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      return error;
    }
  },
  findUser: async (id: string) => {
    try {
      console.log("fetching user")
      console.log("id", id)
      const response = await fetch(`http://localhost:5000/api/user/${id}`);
      console.log("response", response);
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return error;
    }
  },
  updateUser: async (id: string, data: any) => {
    console.log("id", id);
    console.log("data", data);
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      });

      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error("Error updating user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      return error;
    }
  }
};

export default userApi;
