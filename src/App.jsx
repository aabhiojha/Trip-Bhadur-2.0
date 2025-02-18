import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-5xl">hey</p>
      <Button>Hye</Button>
    </>
  );
}

export default App;
