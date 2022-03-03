import Link from 'next/link';
import React from 'react';
import { MF } from '../interfaces';

type Props = {
  data: MF;
};

const TableRow = ({ data }: Props) => (
  <tr>
    <td>
      <Link href="/mf/[id]" as={`/mf/${data.id}`}>
        <a>
          {data.id}: {data.name}
        </a>
      </Link>
    </td>
    <td>{data.nav}</td>
    <td>{data.date}</td>
  </tr>
);

export default TableRow;
