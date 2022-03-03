import * as React from 'react';
import { MF } from '../interfaces';

type ListDetailProps = {
  item: MF;
};

const ListDetail = ({ item: mf }: ListDetailProps) => (
  <div>
    <h1>Detail for {mf.name}</h1>
    <p>ID: {mf.id}</p>
    <p>NAV: {mf.nav}</p>
    <p>Date: {mf.date}</p>
  </div>
);

export default ListDetail;
