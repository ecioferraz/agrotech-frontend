import PropTypes from 'prop-types';
import React from 'react';
import { TableBody, TableIndex } from '../components';

import '../styles/IslesTable.css';

export default function IslesTable({ index, body }) {
  return (
    <table>
      <thead>
        <TableIndex index={ index } />
      </thead>
      <tbody>
        <TableBody body={ body } />
      </tbody>
    </table>
  );
}

IslesTable.propTypes = {
  index: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
      ]),
    ),
  ).isRequired,
};
