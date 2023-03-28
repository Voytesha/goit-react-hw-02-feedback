import { BtnContainer } from './Feedback.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ positive, negative, neutral }) {
  
  return (
    <>
      <BtnContainer>
        <button onClick={positive}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={negative}>Bad</button>
      </BtnContainer>
    </>
  );
}

FeedbackOptions.propTypes = {
    positive: PropTypes.func,
    neutral: PropTypes.func,
    negative: PropTypes.func,
};