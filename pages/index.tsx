import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import List from '../components/List';
import { MF } from '../interfaces';
import { mfList } from '../utils/sample-data';

type Props = {
  items: MF[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="MF List | Next.js + TypeScript Example">
    <h1>MF List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /mf</p>
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: MF[] = mfList;
  return { props: { items } };
};

export default WithStaticProps;
