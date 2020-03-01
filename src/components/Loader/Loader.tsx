import React, { FC } from 'react';
import PropTypes from 'prop-types';
import ReactLoader from 'react-loader-spinner';

interface Props {
  width?: number;
  height?: number;
}

const Loader: FC<Props> = ({ width, height }) => (
  <ReactLoader type="Circles" color="#00BFFF" height={width} width={height} />
);

Loader.defaultProps = {
  width: 25,
  height: 25,
};

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Loader;
