import { useState } from "react";

export default function Formdemo2() {
  let [formdata, setFormdata] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  let handeChange = (event) => {
    setFormdata((current) => {
      return { ...formdata, [event.target.name]: event.target.value };
    });
  };

  return (
    <form action="">
      <label htmlFor="fullname">Fullname</label> &nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter fullname"
        value={formdata.fullname}
        id="fullname"
        name="fullname"
        onChange={handeChange}
      />
      <br />
      <br />
      <label htmlFor="username">Username</label> &nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter username"
        value={formdata.username}
        id="username"
        name="username"
        onChange={handeChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label> &nbsp;&nbsp;
      <input
        type="password"
        placeholder="Enter username"
        value={formdata.password}
        id="password"
        name="password"
        onChange={handeChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
