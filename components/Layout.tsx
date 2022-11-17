import Head from "next/head";
import { WEBSITE_NAME } from "../utils/constants";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
