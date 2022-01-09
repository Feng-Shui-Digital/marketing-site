/** eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
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
        <meta
          key="description"
          name="description"
          content="A next-gen software consultancy building web2 and web3 applications, and everything in between."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Feng, shui, digital, software, agency, consultancy, decentralized, web, mobile, desktop, tablet"
        />
        <meta key="subject" name="subject" content="Feng Shui Digital" />
        <meta key="robots" name="robots" content="index,follow" />
        <meta key="og_type" property="og:type" content="website" />
        <meta key="og_title" property="og:title" content="Feng Shui Digital" />
        <meta
          key="og_description"
          property="og:description"
          content="A next-gen software consultancy building web2 and web3 applications, and everything in between."
        />
        <meta
          key="og_site_name"
          property="og:site_name"
          content="Feng Shui Digital"
        />
        <meta
          key="og_url"
          property="og:url"
          content="https://fengshuidigital.com/"
        />
        <meta
          key="og_image"
          property="og:image"
          content="https://fengshuidigital.com/fsd-logo.png"
        />
        <meta key="twitter_card" name="twitter:card" content="summary" />
        <meta
          key="twitter_site"
          name="twitter:site"
          content="Feng Shui Digital"
        />
        <meta
          key="twitter_image_url"
          name="twitter:image"
          content="https://fengshuidigital.com/fsd-logo.png"
        />
        <meta
          key="twitter_description"
          name="twitter:description"
          content="A next-gen software consultancy building web2 and web3 applications, and everything in between."
        />
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
