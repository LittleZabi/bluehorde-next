import Head from "next/head";
import { WEBSITE_NAME } from "../utils/constants";
import Footer from "./footer";
import Header from "./header";
import { useState, useEffect } from "react";
import Message from "./message";
import Cookies from "js-cookie";
export default function Layout({ title, children }) {
  const [message, setMessage] = useState<any>(false);
  useEffect(() => {
    if (Cookies.get("message")) {
      setMessage(JSON.parse(Cookies.get("message")));
      Cookies.remove("message");
    }
  }, []);
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
        {message && (
          <Message
            message={message.text}
            variant={message.variant}
            handleClose={() => setMessage(false)}
            closeAfter={message.closeAfter ?? 6}
          />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
