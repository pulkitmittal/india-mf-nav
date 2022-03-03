import Link from 'next/link';
import React from 'react';
import { MF } from '../interfaces';

type Props = {
  data: MF;
};

const ListItem = ({ data }: Props) => (
  <Link href="/mf/[id]" as={`/mf/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
