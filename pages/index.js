// import styles from "../styles/Layout.module.css";
import Head from "next/head";
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
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

export const getStaticProps = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts?=limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
