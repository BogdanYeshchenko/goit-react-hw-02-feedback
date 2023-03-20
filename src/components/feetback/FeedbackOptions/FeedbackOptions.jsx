import './FeedbackOptions.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttonBox">
      <button
        name="good"
        type="button"
        onClick={onLeaveFeedback}
        className="btn btn-dark"
      >
        Good
      </button>
      <button
        name="neutral"
        type="button"
        onClick={onLeaveFeedback}
        className="btn btn-dark"
      >
        Neutral
      </button>
      <button
        name="bad"
        type="button"
        onClick={onLeaveFeedback}
        className="btn btn-dark"
      >
        Bed
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
