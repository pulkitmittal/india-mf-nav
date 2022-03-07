import * as React from 'react';
import { MF } from '../interfaces';
import TableRow from './TableRow';

type Props = {
  items: {
    item: MF;
    timestamp: Date;
  }[];
};

const Table = ({ items }: Props) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Fund</th>
          <th>NAV</th>
          <th>Date</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ item, timestamp }) => (
          <TableRow key={item.id} data={item} timestamp={timestamp} />
        ))}
      </tbody>
    </table>
    <style>{`
      table {
        border: 1px solid;
        border-collapse: collapse;
      }
      table th,
      table td {
        border: 1px solid;
        padding: 4px 8px;
      }
      table tr:nth-child(2n+1) td {
        background: #eee;
      }
    `}</style>
  </>
);

export default Table;
