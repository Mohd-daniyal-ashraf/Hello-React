import { useCallback, useState } from "react";

export default function Formdemo() {
  let [name, setName] = useState("daniyal");

  let change = (e) => {
    setName(e.target.value);
  };

  return (
    <form action="">
      <label htmlFor="fullname">Fullname</label>
      <input
        type="text"
        placeholder="Enter Nmae"
        value={name}
        id="fullname"
        onChange={change}
      />
      <button>Submit</button>
    </form>
  );
}
