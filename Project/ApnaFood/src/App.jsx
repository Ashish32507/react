import { useState } from "react";
import Hearder from "./Component/Hearder";
import Body from "./Component/Body";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hearder />
      <Body />
    </>
  );
}

export default App;
