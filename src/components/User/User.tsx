/* eslint-disable @typescript-eslint/camelcase */
import React, { MouseEvent, FC } from 'react';
import PropTypes from 'prop-types';

import { user as userPropType } from 'utils/PropTypes';
import IUser from 'types/user';
import { FlexRow } from 'components';

import { Container, Image, Login, ProfileAddress } from './User.style';

interface Props {
  user: IUser;
  imgWidth?: number;
  imgHeight?: number;
}
const User: FC<Props> = ({
  user: { avatar_url: avatarUrl, login, html_url: htmlUrl },
  imgWidth,
  imgHeight,
}) => (
  <Container>
    <Image
      src={avatarUrl}
      width={imgWidth}
      height={imgHeight}
      alt={`${login}'s avatar`}
    />
    <FlexRow direction="column" justify="center" align="flex-start">
      <Login>@{login}</Login>
      <ProfileAddress
        target="_blank"
        onClick={(e: MouseEvent) => e.stopPropagation()}
        href={htmlUrl}
      >
        {htmlUrl}
      </ProfileAddress>
    </FlexRow>
  </Container>
);

User.defaultProps = {
  imgWidth: 80,
  imgHeight: 80,
};

User.propTypes = {
  user: userPropType.isRequired,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
};

export default User;
