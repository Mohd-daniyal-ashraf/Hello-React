import { useState, useEffect } from "react";
import "./Comment.css";
export default function Comment() {
  let [commentdata, setCommentdata] = useState({
    username: "",
    message: "",
    rating: "3",
  });
  let [arr, setArr] = useState([
    {
      username: "Mohd daniyal",
      message: "According to me the product was so nice ",
      rating: "5",
    },
  ]);
  useEffect(
    function print() {
      console.log("dffd");
    },
    [arr]
  );
  let inputChange = (event) => {
    setCommentdata((current) => {
      return { ...current, [event.target.name]: event.target.value };
    });
  };

  let submit = (e) => {
    e.preventDefault();
    console.log(commentdata);
    setCommentdata({ username: "", message: "", rating: "3" });
  };

  let addArr = () => {
    setArr([
      ...arr,
      {
        username: commentdata.username,
        message: commentdata.message,
        rating: commentdata.rating,
      },
    ]);
  };

  let colorchange = () => {
    if (commentdata.username.length > 0 && commentdata.username.length < 3) {
      return { color: "red" };
    } else if (
      commentdata.username.length >= 3 &&
      commentdata.username.length <= 8
    ) {
      return { color: "yellow" };
    } else if (commentdata.username.length >= 9) {
      return { color: "green" };
    }
  };

  return (
    <div>
      <span className="left">
        <h3>This is all comments</h3>
        <ul>
          {arr.map((current, index) => (
            <li key={index}>
              <span> {current.username}</span> <br />
              <span> {current.message}</span> <br />
              <span> {current.rating}</span>
            </li>
          ))}
        </ul>
      </span>
      <form action="" onSubmit={submit}>
        <h1>Give a Comment!</h1>
        <label htmlFor="username">ENTER USERNMAE</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          name="username"
          value={commentdata.username}
          onChange={inputChange}
          required
        />
        {commentdata.username.length > 0 ? (
          <p style={colorchange()}>Storng username</p>
        ) : null}
        <label htmlFor="message">ENTER MESSAGE</label>
        <textarea
          id="message"
          placeholder="message"
          name="message"
          value={commentdata.message}
          onChange={inputChange}
          required
        ></textarea>
        <label htmlFor="rating">ENTER RATING</label>

        <input
          id="rating"
          type="number"
          placeholder="rating"
          name="rating"
          min={1}
          max={5}
          value={commentdata.rating}
          onChange={inputChange}
          required
        />

        <button onClick={addArr}>Submit</button>
      </form>
    </div>
  );
}
