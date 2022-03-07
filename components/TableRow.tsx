import Link from 'next/link';
import React from 'react';
import { MF } from '../interfaces';

type Props = {
  data: MF;
  timestamp: Date;
};

const TableRow = ({ data, timestamp }: Props) => (
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
    <td>
      <em>Response fetched at {new Date(timestamp).toString()}</em>
    </td>
  </tr>
);

export default TableRow;
