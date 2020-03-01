import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { user as userPropType } from 'utils/PropTypes';
import IUser from 'types/user';
import IRepo from 'types/repo';
import { user as userService, repo as repoService } from 'services';
import { GlobalState } from 'rootReducer';
import paths from 'consts/paths';

import { UserInfo, ReposInfo } from './components';
import { Button, Container, ButtonWrapper } from './Details.style';

interface MapStateProps {
  user?: IUser;
  repos: IRepo[];
  fetchingUser: boolean;
  errorUser: null | string;
  errorRepos: null | string;
  fetchingRepos: boolean;
}

interface ActionProps {
  getUser: Function;
  resetUsers: Function;
  resetRepos: Function;
  getRepos: Function;
}

interface IOwnProps {
  match: {
    params: {
      username: string;
    };
  };
  history: {
    push: Function;
  };
}

type Props = MapStateProps & ActionProps & IOwnProps;

const Details: FC<Props> = ({
  fetchingUser,
  getUser,
  user,
  resetUsers,
  getRepos,
  match,
  history,
  errorUser,
  errorRepos,
  resetRepos,
  fetchingRepos,
  repos,
}) => {
  useEffect(() => {
    getUser(match.params.username);
    return () => {
      resetUsers();
    };
  }, [getUser, match.params.username, resetUsers]);

  useEffect(() => {
    getRepos(match.params.username);
    return () => {
      resetRepos();
    };
  }, [getRepos, match.params.username, resetRepos]);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={() => history.push(paths.users)}>Users List</Button>
      </ButtonWrapper>
      <UserInfo fetching={fetchingUser} user={user} error={errorUser} />
      <ReposInfo fetching={fetchingRepos} repos={repos} error={errorRepos} />
    </Container>
  );
};

Details.defaultProps = {
  user: undefined,
  errorUser: null,
  errorRepos: null,
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  fetchingUser: PropTypes.bool.isRequired,
  fetchingRepos: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  user: userPropType,
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(PropTypes.any).isRequired,
  resetUsers: PropTypes.func.isRequired,
  resetRepos: PropTypes.func.isRequired,
  errorUser: PropTypes.string,
  errorRepos: PropTypes.string,
};

const mapStateToProps = (
  state: GlobalState,
  ownProps: IOwnProps,
): MapStateProps => ({
  fetchingUser: userService.selectors.fetching(state),
  errorUser: userService.selectors.error(state),
  fetchingRepos: repoService.selectors.fetching(state),
  errorRepos: repoService.selectors.error(state),
  repos: repoService.selectors.repos(state),
  user: userService.selectors.userById(state, ownProps.match.params.username),
});

const mapDispatchToProps: ActionProps = {
  getUser: userService.actions.getUser,
  getRepos: repoService.actions.getRepos,
  resetRepos: repoService.actions.reset,
  resetUsers: userService.actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
