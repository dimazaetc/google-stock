import React from "react";
import { Button } from "react-bootstrap";
import "./full-name.css";
export default function FullName({ name }) {
  let helpName = "";

  switch (name) {
    case "AAPL":
      helpName = "Apple";
      break;
    case "GOOGL":
      helpName = "Google";
      break;
    case "MSFT":
      helpName = "Microsoft";
      break;
    case "AMZN":
      helpName = "Amazon";
      break;
    case "FB":
      helpName = "Facebook";
      break;
    case "TSLA":
      helpName = "Tesla";
      break;
    case "NFLX":
      helpName = "Netflix";
      break;
    case "MU":
      helpName = "Micron Technology";
      break;
    case "NVDA":
      helpName = "Nvidia";
      break;

    default:
  }

  return (
    <Button variant="success" data-tooltip={helpName}>
      {name}
    </Button>
  );
}
