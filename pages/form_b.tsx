import type { NextPage } from 'next';
import { FormPage } from '../components/FormB/FormPage/FormPage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <FormPage />
    </main>
  );
};

export default Home;
