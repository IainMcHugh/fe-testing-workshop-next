import type { NextPage } from 'next';

import { MyForm } from '../components/FormA/Form/Form';
import { Main, FormWrapper, H1 } from '../styles';

const Home: NextPage = () => {
  return (
    <Main>
      <FormWrapper>
        <H1>Form A</H1>
        <MyForm isDraft={true} />
      </FormWrapper>
    </Main>
  );
};

export default Home;
