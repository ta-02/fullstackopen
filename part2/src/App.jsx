import { useState } from "react";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total, sum }) => {
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback yet!
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="total" value={total} />
      <Display text="average %" value={(sum / total) * 100} />
    </div>
  );
};

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
