/* eslint-disable @typescript-eslint/camelcase */
import PropTypes from 'prop-types';

export const user = PropTypes.shape({
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  node_id: PropTypes.string.isRequired,
  gravatar_id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  followers_url: PropTypes.string.isRequired,
  following_url: PropTypes.string.isRequired,
  gists_url: PropTypes.string.isRequired,
  starred_url: PropTypes.string.isRequired,
  subscriptions_url: PropTypes.string.isRequired,
  organizations_url: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired,
  events_url: PropTypes.string.isRequired,
  received_events_url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  site_admin: PropTypes.bool.isRequired,
});
