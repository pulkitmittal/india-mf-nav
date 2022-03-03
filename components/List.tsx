import * as React from 'react';
import { MF } from '../interfaces';
import ListItem from './ListItem';

type Props = {
  items: MF[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
