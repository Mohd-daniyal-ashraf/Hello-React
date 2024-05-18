import { useState } from "react";

export default function Button() {
  let { count, setCount } = useState(80);
  return (
    <div>
      {/* <p>Count: {count}</p> */}
      {/* <button onClick={increase}>Click me </button> */}
    </div>
  );
}
