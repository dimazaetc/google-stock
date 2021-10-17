import React from "react";
import { Button } from "react-bootstrap";

export default function Healper({ name }) {
  let helpName = "";
  if (name === "AAPL") {
    helpName = "Apple";
  } else if (name === "GOOGL") {
    helpName = "Google";
  } else if (name === "MSFT") {
    helpName = "Microsoft";
  } else if (name === "AMZN") {
    helpName = "Amazon";
  } else if (name === "FB") {
    helpName = "Facebook";
  } else if (name === "TSLA") {
    helpName = "Tesla";
  } else if (name === "NFLX") {
    helpName = "Netflix";
  } else if (name === "MU") {
    helpName = "Micron Technology";
  } else if (name === "NVDA") {
    helpName = "Nvidia";
  }

  return (
    <Button variant="success" data-tooltip={helpName}>
      {name}
    </Button>
  );
}
