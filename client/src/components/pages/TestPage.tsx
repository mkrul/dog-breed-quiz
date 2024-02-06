import React from "react";

const TestPage = () => {
  fetch("http://localhost:5000/test").then((response: Response) =>
    console.log("DERP:", response)
  );
  // .then((data) => console.log(data));

  return <div>TestPage</div>;
};

export default TestPage;
