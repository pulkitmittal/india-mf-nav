import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { MF } from '../../interfaces';
import { mfList } from '../../utils/sample-data';

// This gets called on every request
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   try {
//     const { id } = context.query;
//     // Fetch data from external API
//     const res = await fetch(`/api/mf/${id}`);
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { data } };
//   } catch (error) {
//     return { props: { error: String(error) } };
//   }
// }

// // const fetcher = async (url) => {
// //   const res = await fetch(url);
// //   const data = await res.json();

// //   if (res.status !== 200) {
// //     throw new Error(data.message);
// //   }
// //   return data;
// // };

// interface Props {
//   data: MF;
//   error?: string;
// }

// export default function Index({ data, error }: Props) {
//   // const { query } = useRouter();
//   // const id = query.id;
//   // const { data, error } = useSWR(() => id && `/api/mf/${id}`, fetcher);

//   if (error) {
//     return (
//       <Layout title="Error | Next.js + TypeScript Example">
//         <p>
//           <span style={{ color: 'red' }}>Error:</span> {error}
//         </p>
//       </Layout>
//     );
//   }

//   const item = {
//     ...mfList.find((d) => d.id === Number(data.id)),
//     ...data,
//   };

//   return (
//     <Layout
//       title={`${item ? item.name : 'MF Detail'} | Next.js + TypeScript Example`}
//     >
//       {item && <ListDetail item={item} />}
//     </Layout>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const paths = mfList.map((mf) => ({
//     params: { id: mf.id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// };

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     const item = mfList.find((data) => data.id === Number(id));
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { item } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };

type Props = {
  item?: MF;
  errors?: string;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    // Fetch data from external API
    const res = await fetch(`http://localhost:4000/api/mf/${id}`);
    const data = await res.json();
    const item = {
      ...mfList.find((mf) => mf.id === Number(id)),
      ...data,
    };

    // Pass data to the page via props
    return { props: { item } };
  } catch (error) {
    return { props: { errors: String(error) } };
  }
};

export default function Page({ item, errors }: Props) {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  console.log(item);

  return (
    <Layout
      title={`${item ? item.name : 'MF Detail'} | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
}
