/* eslint-disable @typescript-eslint/camelcase */
import React, { MouseEvent, FC } from 'react';
import PropTypes from 'prop-types';

import IRepo from 'types/repo';
import { FlexRow } from 'components';

import { Container, Name, ProfileAddress } from './Repo.style';

const Repo: FC<IRepo> = ({ name, html_url: htmlUrl }) => (
  <Container>
    <FlexRow direction="column" justify="center" align="flex-start">
      <Name>{name}</Name>
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

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default Repo;
