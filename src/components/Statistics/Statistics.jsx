const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>good: {good}</li>
    <li>neutral: {neutral}</li>
    <li>bad: {bad}</li>
    <li>total: {total}</li>
    <li>
      Positive feedback: {positivePercentage > 0 ? `${positivePercentage}%` : 0}
    </li>
  </ul>
);

export default Statistics;
