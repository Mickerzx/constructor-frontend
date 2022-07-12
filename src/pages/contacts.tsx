import type { GetServerSideProps, NextPage } from 'next';
// import { fetchTemplate } from '../api/template/template.api';
import { structureParser } from '../utils/structureParser';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { Structure } from '../types-space/types/structure.type';

type PropsType = {
  structure: Structure;
};

const Contacts: NextPage<PropsType> = ({}: PropsType) => {
  return (
    <MainLayout>
      <h1>Contacts page</h1>
    </MainLayout>
  );
};

// req
export const getServerSideProps: GetServerSideProps = async ({}) => {
  // const host = req.headers.host!;
  // const { structure } = await fetchTemplate(host);

  const stringStructure = `[{"page":"main","canvas":[
    {"blockId":"l524y1ao","type":"MallDivider","parameters":{"width":"100%","borderWidth":"2px","color":"darkgray","borderStyle":"solid","margin":"16px 0","children":"Текст слева","textPosition":"left"},"order":1}]}]`;

  const structure = await structureParser(stringStructure);

  if (!structure) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      structure,
    },
  };
};

export default Contacts;
