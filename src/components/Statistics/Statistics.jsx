import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return;
  }
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage || ''}% </p>
    </>
  );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number, 
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,    
}
export { Statistics };

