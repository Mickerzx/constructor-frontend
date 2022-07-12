// Core
import type { GetServerSideProps, NextPage } from 'next';

// Api
import { fetchTemplate } from '../../api/template/template.api';

// Types
import { Structure } from '../../types-space/types/structure.type';

type PropsType = {
  structure: Structure;
};

const Product: NextPage<PropsType> = ({}: PropsType) => {
  return (
    <div>
      <h1>Product page</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const host = req.headers.host!;
  const { structure } = await fetchTemplate(host);

  // if (!structure) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      structure,
    },
  };
};

export default Product;
