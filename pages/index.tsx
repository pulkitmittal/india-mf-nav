import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Table from '../components/Table';
import { MF } from '../interfaces';
import { mfList } from '../utils/sample-data';

type Props = {
  items?: MF[];
  errors?: string;
};

const Index = ({ items, errors }: Props) => (
  <Layout title="MF List | Next.js + TypeScript Example">
    <h1>MF List</h1>
    <p>
      Example fetching data from inside <code>getServerSideProps()</code>.
    </p>
    <p>You are currently on: /mf</p>
    {items ? (
      <Table items={items} />
    ) : (
      <>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </>
    )}
  </Layout>
);

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: MF[] = mfList;
//   return { props: { items } };
// };

// // This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch data from external API
    const data = await Promise.all(
      mfList.map((mf) =>
        fetch(`http://localhost:4000/api/mf/${mf.id}`)
          .then((r) => r.json())
          .then((data) => ({
            ...mf,
            ...data,
          }))
      )
    );
    // const data = await Promise.all(res.map((r) => r.json()));

    // Pass data to the page via props
    return { props: { items: data } };
  } catch (error) {
    return { props: { errors: String(error) } };
  }
};

export default Index;
