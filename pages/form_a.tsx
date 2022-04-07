import type { NextPage } from 'next';
import { MyForm } from '../components/FormA/Form/Form';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <MyForm isDraft={true} />
    </main>
  );
};

export default Home;
