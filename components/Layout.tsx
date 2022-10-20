import Head from "next/head";
import { WEBSITE_NAME } from "../utils/constants";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + " | " + WEBSITE_NAME : "HOME | " + WEBSITE_NAME}
        </title>
      </Head>
      <div className='App'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
