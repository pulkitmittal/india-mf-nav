import * as React from 'react';
import { MF } from '../interfaces';
import TableRow from './TableRow';

type Props = {
  items: MF[];
};

const Table = ({ items }: Props) => (
  <table>
    <thead>
      <tr>
        <th>Fund</th>
        <th>NAV</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <TableRow key={item.id} data={item} />
      ))}
    </tbody>
  </table>
);

export default Table;
