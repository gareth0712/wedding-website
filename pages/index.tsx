import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    const docUrl: string =
      'https://docs.google.com/document/d/12aAKcSGAwlmyu6k_1xBdqgVLR1pllY0z_yKL1Og63i0/edit?usp=sharing';
    window.location.replace(docUrl);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Fung and Lydia&apos;s Wedding</title>
        <meta name='description' content='Created by Garen Studio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>網站建設中, 將自動轉至請柬頁...</main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Garen Studio
        </a>
      </footer>
    </div>
  );
};

export default Home;
