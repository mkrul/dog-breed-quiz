

const userApi = {
  getUser: async () => {
    try {
      const response = await fetch("http://localhost:5000/user/:ipAddress");
      const user = await response.json();
      console.log("in user api:", user);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return error;
    }
  },
};

export default userApi;
