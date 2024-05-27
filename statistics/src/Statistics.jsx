import { Display } from "./Display";

export const Statistics = ({ good, neutral, bad, total, sum }) => {
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
