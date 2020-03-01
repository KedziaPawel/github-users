import React, { FC } from 'react';

import IUser from 'types/user';
import { User } from 'components';

import { Container } from './UserRow.style';

const UserRow: FC<IUser> = user => (
  <Container>
    <User user={user} />
  </Container>
);

export default UserRow;
