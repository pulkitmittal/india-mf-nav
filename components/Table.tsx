import * as React from 'react';
import { MF } from '../interfaces';
import TableRow from './TableRow';

type Props = {
  items: MF[];
};

const Table = ({ items }: Props) => (
  <table>
    <tbody>
      {items.map((item) => (
        <TableRow key={item.id} data={item} />
      ))}
    </tbody>
  </table>
);

export default Table;
