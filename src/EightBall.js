import { useState } from "react";
import "./EightBall.css";

/** EightBall
 * 
 *  props:
 *  - answers: [{ msg: "...", color: "..."}, ...]
 * 
 *  state:
 *  - color: black(default)/green/red/goldenrod
 *  - msg: "think of a question"(default)
 * 
 *  App -> EightBall
*/
function EightBall({ answers }) {

  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("think of a question");
  
  /** generates random answer from answers array
   *  returns object. */
  // NOTE: make getRandAns a helper function
  function getRandAns() {
    let randNum = Math.floor(Math.random() * answers.length);
    return answers[randNum];
  }
  
  /** handles click */
  function handleClick() {
    const { msg, color } = getRandAns();
    setColor(color);
    setMsg(msg);
  }

  // use evt handler to call getRandAns

  

  return (
    <div className="EightBall">
      <button
        className="EightBall-btn"
        onClick={handleClick}
        style={{ backgroundColor: color }}>
        <b>{msg}</b>
      </button>
    </div>
  );



}


EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
};

export default EightBall;
