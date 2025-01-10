import Head from "next/head";
import router from "next/router";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import { useEffect } from "react";



const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Full-stack web developer"
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      {/* <Header /> */}

      {/* main content */}
      {children}

    </main>
  );
};

export default Layout;
