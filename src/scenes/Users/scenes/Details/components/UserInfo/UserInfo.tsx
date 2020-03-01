import React from 'react';

import { User, Loader, ErrorMessage } from 'components';
import IUser from 'types/user';

const UserInfo = ({
  fetching,
  error,
  user,
}: {
  fetching: boolean;
  error: string | null;
  user?: IUser;
}) => {
  if (fetching) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`User: ${error}`} />;
  }

  if (!user) {
    return null;
  }

  return <User user={user} imgWidth={200} imgHeight={200} />;
};

export default UserInfo;
