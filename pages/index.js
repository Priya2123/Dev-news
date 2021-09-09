//HOME PAGE

// import styles from "../styles/Layout.module.css";
// import Head from "next/head";
import Article from "../components/Article";
import { server } from "../config";
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      {/* <Head>
        <title>Main</title>
        <meta
          name="keywords"
          content="nextjs 
        "
        />
      </Head> */}
      <Article articles={articles} />
      {/* <h1>welcome</h1> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
