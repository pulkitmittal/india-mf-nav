import { useRouter } from 'next/router';
import useSWR from 'swr';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { MF } from '../../interfaces';
import { mfList } from '../../utils/sample-data';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

type Props = {
  item?: MF;
  errors?: string;
};

export default function Index() {
  const { query } = useRouter();
  const id = query.id;
  const { data, error } = useSWR(() => id && `/api/mf/${id}`, fetcher);

  if (error) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {error}
        </p>
      </Layout>
    );
  }

  const item = {
    ...mfList.find((data) => data.id === Number(id)),
    ...data,
  };

  return (
    <Layout
      title={`${item ? item.name : 'MF Detail'} | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
}

// const StaticPropsDetail = ({ item, errors }: Props) => {
//   if (errors) {
//     return (
//       <Layout title="Error | Next.js + TypeScript Example">
//         <p>
//           <span style={{ color: 'red' }}>Error:</span> {errors}
//         </p>
//       </Layout>
//     );
//   }

//   return (
//     <Layout
//       title={`${item ? item.name : 'MF Detail'} | Next.js + TypeScript Example`}
//     >
//       {item && <ListDetail item={item} />}
//     </Layout>
//   );
// };

// export default StaticPropsDetail;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on mf
//   const paths = mfList.map((user) => ({
//     params: { id: user.id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// };

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     let item = mfList.find((data) => data.id === Number(id));
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { item } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };
