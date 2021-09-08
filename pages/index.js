import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Main</title>
        <meta
          name="keywords"
          content="nextjs 
        "
        />
      </Head>
      <h1>welcome</h1>
    </div>
  );
}
