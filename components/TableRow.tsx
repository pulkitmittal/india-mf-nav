import React from 'react';
import { MF } from '../interfaces';

type Props = {
  data: MF;
};

const TableRow = ({ data }: Props) => (
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.nav}</td>
    <td>{data.date}</td>
  </tr>
);

export default TableRow;
