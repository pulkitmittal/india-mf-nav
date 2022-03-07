import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { MF } from '../../interfaces';
import { mfList } from '../../utils/sample-data';
import { getBaseUrl } from '../../utils/util';

type Props = {
  item?: {
    value: MF;
    timestamp: number;
  };
  errors?: string;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    // Fetch data from external API
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/mf/${id}`);
    const data = await res.json();
    const item = {
      value: {
        ...mfList.find((mf) => mf.id === Number(id)),
        ...data.value,
      },
      timestamp: data.timestamp,
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
      <Layout title="Error | India Mutual Fund Nav" showHomeLink>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${item ? item.value.name : 'MF Detail'} | India Mutual Fund Nav`}
      showHomeLink
    >
      {item && <ListDetail item={item.value} timestamp={item.timestamp} />}
    </Layout>
  );
}
