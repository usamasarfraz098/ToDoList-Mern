import React, { useState } from "react";
import "./index.css";
// import Login from "./Login";
import SignUp from "./Sign-up";
import Login from "./Login";
import Index from "./Index";
const App = () => {
  // const [login, setLogin] = useState(true);
  return (
    <>
      {/* {login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />} */}
      <Index />
    </>
  );
};

export default App;
