const userApi = {
  getUser: async () => {
    try {
      const response = await fetch("http://localhost:5000/user/:ipAddress");
      console.log("in userApi", JSON.stringify(response));
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userApi;
