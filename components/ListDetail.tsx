import * as React from 'react';
import { MF } from '../interfaces';

type ListDetailProps = {
  item: MF;
  timestamp: number;
};

const ListDetail = ({ item, timestamp }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.name}</h1>
    <p>
      ID: <span>{item.id}</span>
    </p>
    <p>
      NAV: <span>{item.nav}</span>
    </p>
    <p>
      Date: <span>{item.date}</span>
    </p>
    <p>
      <em>Response fetched at {new Date(timestamp).toString()}</em>
    </p>
  </div>
);

export default ListDetail;
