import type { NextPage } from 'next';

import { FormPage } from '../components/FormB/FormPage/FormPage';
import { Main, FormWrapper, H1 } from '../styles';

const Home: NextPage = () => {
  return (
    <Main>
      <FormWrapper>
        <H1>Form B</H1>
        <FormPage />
      </FormWrapper>
    </Main>
  );
};

export default Home;
