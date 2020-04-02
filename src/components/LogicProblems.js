import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

const LogicProblems = () => {
  const [number, setNumber] = useState("");

  const handleChange = e => {
    setNumber(
      e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    );
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="inherit">
            Write a function that returns true or false based on if the passed
            value is an even number.
          </Typography>
          <form>
            <label>
              Number:
              <input type="number" name={number} onChange={handleChange} />
            </label>
            {number && <p>{number % 2 === 0 ? "Even" : "Odd"}</p>}
            {!number && <p> Please enter a number</p>}
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography color="inherit">
            - Write a function that takes in two parameters; a string of length
            n, and a single character. Find and count all instances of the
            single character and return the number found. - Take the two arrays
            below, find matching values, and return an array containing them. ○
            [4, 3, 4, 29, 99, 13, 19, 23, 34] ○ [3, 45, 57, 0, 94, 23, 24, 34]
          </Typography>
          <Typography>
            <a href="https://repl.it/@BekahHW/chameleon-coding-challenge">
              Repl.it link
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogicProblems;
