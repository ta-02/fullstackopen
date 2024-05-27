import { useState } from "react";
import { Statistics } from "./Statistics";
import { Button } from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState(0);

  const HandleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setSum(sum + 1);
  };

  const HandleNeturalClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const HandleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setSum(sum - 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={HandleGoodClick} text="good" />
      <Button handleClick={HandleNeturalClick} text="neutral" />
      <Button handleClick={HandleBadClick} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        sum={sum}
      />
    </>
  );
};

export default App;
