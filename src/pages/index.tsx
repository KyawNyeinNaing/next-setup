import type { NextPage } from 'next';
import styles from '@/styles/Home.module.css';
import { useAppDispatch, useTypedSelector } from '@/store/reducers';
import { useEffect } from 'react';
import { emit } from '@/store/actions/emit.actions';
import Layout from '@/components/Template';

const Home: NextPage = () => {
  const { isModal } = useTypedSelector(state => state.emit);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(emit.setEmit('IS_MODAL', true));
  }, []);

  console.log(isModal);

  return (
    <Layout title="Welcome">
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
};

export default Home;
