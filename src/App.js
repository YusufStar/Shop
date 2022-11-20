import { useEffect } from "react";
import { auth } from "./Database";
import { login } from "./Functions";
import CustomRouter from "./Router/CustomRouter";

function App() {
  return (
    <>
      <CustomRouter/>
    </>
  );
}

export default App;
