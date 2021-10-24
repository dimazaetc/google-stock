import React, { useState } from "react";
import { socket } from "../../redux/get-socket";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./timer.css";

const Timer = () => {
  const [value, setValue] = useState("");
  const [typeError, setTypeError] = useState("");
  function clearClass() {
    setTypeError("");
  }
  const acceptTime = () => {
    if (value === "") {
      setTypeError("nothing");
      setValue("");
    } else if (!!+value === false) {
      setTypeError("error");
      setValue("");
    } else {
      setValue("");
      socket.emit("getNewTimer", value * 1000);
      setTypeError("success");
    }
    setTimeout(clearClass, 4000);
  };

  return (
    <div id="timer" className={typeError}>
      <InputGroup>
        <FormControl
          placeholder="Enter update interval in seconds"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button variant="info" onClick={acceptTime}>
          Accept
        </Button>
      </InputGroup>
    </div>
  );
};
export default Timer;
