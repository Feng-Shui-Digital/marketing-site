/** eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../lib/styles/Home.module.css";
import { Main } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feng Shui Digital</title>
        <meta name="description" content="A phenominal development shop" />
        <meta
          key="scaling"
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Script src="js/jquery-2.1.0.min.js" />

        <Script src="js/popper.js" />
        <Script src="js/bootstrap.min.js" />

        <Script src="js/scrollreveal.min.js" />
        {/* <Script src="js/waypoints.min.js" /> */}
        <Script src="js/jquery.counterup.min.js" />
        <Script src="js/imgfix.min.js" />

        {/* <Script src="js/custom.js" /> */}
        <Main />
      </main>
    </>
  );
};

export default Home;
