import * as React from 'react';
import { MF } from '../interfaces';

type ListDetailProps = {
  item: MF;
};

const ListDetail = ({ item: mf }: ListDetailProps) => (
  <div>
    <h1>Detail for {mf.name}</h1>
    <p>
      ID: <span>{mf.id}</span>
    </p>
    <p>
      NAV: <span>{mf.nav}</span>
    </p>
    <p>
      Date: <span>{mf.date}</span>
    </p>
  </div>
);

export default ListDetail;
