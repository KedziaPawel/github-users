import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { user as userPropType } from 'utils/PropTypes';
import IUser from 'types/user';
import { user as userService } from 'services';
import { GlobalState } from 'rootReducer';
import { User, ErrorMessage, Loader, FlexRow } from 'components';

import { Filter } from './components';
import { Container } from './Finder.style';
interface MapStateProps {
  user?: IUser;
  fetching: boolean;
  error: null | string;
}

interface ActionProps {
  getUser: Function;
  reset: Function;
}

type Props = MapStateProps & ActionProps;

class Finder extends Component<Props> {
  static defaultProps = {
    user: undefined,
    error: null,
  };

  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    user: userPropType,
    error: PropTypes.string,
  };
  _onFilterChange = (filter: string) => {
    const { getUser, reset } = this.props;
    filter ? getUser(filter) : reset();
  };

  _renderContent = () => {
    const { fetching, user, error } = this.props;

    if (error) {
      return <ErrorMessage message={error} />;
    }
    if (fetching) {
      return <Loader />;
    }
    if (!user) {
      return null;
    }
    return <User user={user} imgWidth={200} imgHeight={200} />;
  };

  render() {
    return (
      <Container>
        <Filter onChange={this._onFilterChange} />
        <FlexRow>{this._renderContent()}</FlexRow>
      </Container>
    );
  }
}

const mapStateToProps = (state: GlobalState): MapStateProps => ({
  fetching: userService.selectors.fetching(state),
  error: userService.selectors.error(state),
  user: userService.selectors.users(state)[0],
});

const mapDispatchToProps: ActionProps = {
  getUser: userService.actions.getUser,
  reset: userService.actions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
