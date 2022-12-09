import { useRouter } from "next/router";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import Layout from "../../../components/Layout";
import { solveUserAuth } from "../../../lib/data-store";
import { useEffect } from "react";
import Cookies from "js-cookie";
export default function Auth({ user }) {
  const router = useRouter();
  useEffect(() => {
    if (user.status) {
      Cookies.set("user", JSON.stringify(user));
      Cookies.set(
        "message",
        JSON.stringify({
          text: "User Authenticated Successfully! Thanks for Join Us!",
          variant: "success",
          closeAfter: 8,
        })
      );
      router.push(`/`);
    }
  }, [user, router]);
  return (
    <Layout title={"Authenticate User"}>
      <div className='page-size auth-view'>
        <div className='auth-in-view'>
          {user.status ? (
            <div className='success-text'>Authentication Successfull!</div>
          ) : (
            <div className='on-error'>
              <h2>Authentication Failed!</h2>
              <p className='kk-l1111'>
                {" "}
                <FaTimesCircle />
                Issue on registration
              </p>
              <p>
                Your registration link is used before or {"it's"} incorrect.
                please make sure your link is correct and you using it first
                time.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const code: any = context.params.code[0];
  const user = await solveUserAuth(code);
  if (user === "") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user: JSON.parse(user),
    },
  };
}
