// Core
import type {
  // GetServerSideProps,
  NextPage,
} from 'next';

// Api
// import { fetchTemplate } from '../../api/template/template.api';
// import { fetchProducts } from '../../api/products/products.api';

// Types
import { ProductsResponse } from '../../api/products/interfaces/products-response.interface';
import CatalogContainer from '../../containers/CatalogPage/CatalogContainer';
import MainLayout from '../../layouts/MainLayout/MainLayout';
// import { ProductsQuery } from '../../api/products/interfaces/query.interface';
import { Structure } from '../../types-space/types/structure.type';

type PropsType = {
  structure: Structure;
  products: ProductsResponse['products'];
};

const Product: NextPage<PropsType> = ({}: PropsType) => {
  return (
    <div>
      <MainLayout>
        <CatalogContainer />
      </MainLayout>

      {/* {!!products.length &&
        products.map((product) => {
          return <h3 key={product.id}>{product.title}</h3>;
        })} */}
    </div>
  );
};

/*
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const host = req.headers.host!;

  const { products } = await fetchProducts(host, query as unknown as ProductsQuery);

  const { structure } = await fetchTemplate(host);

  // if (!structure) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      structure,
      products,
    },
  };
};
*/

export default Product;
