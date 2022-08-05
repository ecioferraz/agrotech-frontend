import React from 'react';

export default function TableBody({ body }) {
  return (
    body.map(({ id, name, status }) => (
      <tr key={ id }>
        <td>
          {name}
        </td>
        <td>
          {status ? 'Ativa' : 'Inativa'}
        </td>
      </tr>
    ))
  );
}
