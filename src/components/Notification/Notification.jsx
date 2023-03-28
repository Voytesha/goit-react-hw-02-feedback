import PropTypes from 'prop-types';

export function Notification() {
  return <p>There is no feedback</p>;
}


Notification.propTypes = {
    p: PropTypes.string.isRequired,
};