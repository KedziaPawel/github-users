import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import { GlobalState } from 'rootReducer';
import { user as userService } from 'services';
import { InfinityList, ErrorMessage } from 'components';
import IUser from 'types/user';
import paths from 'consts/paths';

import { Container } from './List.style';
import { UserRow } from './components';

interface MapStateProps {
  users: IUser[];
  fetching: boolean;
  error: null | string;
}

interface ActionProps {
  getUsers: Function;
}

type Props = MapStateProps & ActionProps & RouteComponentProps;

const List: FC<Props> = ({ users, getUsers, fetching, history, error }) => (
  <Container>
    {error ? (
      <ErrorMessage message={error} />
    ) : (
      <InfinityList
        list={users}
        loadMore={({ startIndex }: { startIndex: number }) =>
          getUsers({ since: users[startIndex - 1]?.id })
        }
        fetching={fetching}
        rowComponent={UserRow}
        onRowClick={(user: IUser) => {
          history.push(`${paths.users}/${user.login}`);
        }}
      />
    )}
  </Container>
);

const mapStateToProps = (state: GlobalState): MapStateProps => ({
  fetching: userService.selectors.fetching(state),
  error: userService.selectors.error(state),
  users: userService.selectors.users(state),
});

const mapDispatchToProps: ActionProps = {
  getUsers: userService.actions.getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
