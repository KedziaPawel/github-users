import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Text } from './ErrorMessage.style';

interface Props {
  message: string;
}

const ErrorMessage: FC<Props> = ({ message }) => <Text>{message}</Text>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
