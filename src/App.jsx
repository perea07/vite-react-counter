import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let [count, setCount] = useState(() => {
    console.log("useEffect");
    let savedCount = localStorage.getItem("count");
    return savedCount !== null ? Number(savedCount) : 0;
  });

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
    console.log(count);
  }

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div>
        <h1>React Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
