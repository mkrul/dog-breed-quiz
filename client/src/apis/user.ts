

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
  updateUser: async (document: any) => {
    try {
      const doc = JSON.stringify(document)
      console.log("document", doc)
      const response = await fetch("http://localhost:5000/user/:ipAddress", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: doc,
      });
      console.log("response", response)
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      return error;
    }
  }

};

export default userApi;
