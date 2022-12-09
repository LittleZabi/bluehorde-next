import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { WEBSITE_NAME } from "../../utils/constants";
import { useEffect, useContext } from "react";
import { Store } from "../../context/context";
import Cookies from "js-cookie";
export default function SignOut() {
  const router = useRouter();
  const { state, dispatch } = useContext<any>(Store);
  useEffect(() => {
    if (!Cookies.get("user")) {
      router.push("/user/sign-in");
    }
  }, [router]);
  const handleLogin = (e: any) => {
    e.preventDefault();
    Cookies.remove("user");
    dispatch({ type: "SIGN-OUT" });
    router.push("/user/sign-in");
  };
  return (
    <Layout title={"LOGIN "}>
      <div className='sign-view'>
        <div className='sign-page-back'>
          <picture>
            <img src='/media/images/sign-back.jpg' alt='image' />
          </picture>
          <div className='page-layer'></div>
        </div>
        <div className='page-size to-center'>
          <div className='form-view fade-in'>
            <h3>SIGNING OUT TO {WEBSITE_NAME}</h3>
            <h5>
              Signing Out to your profile and you were not be able to get full
              access to our products and buy things, Inspiration and community.
            </h5>
            <form onSubmit={handleLogin}>
              <input type='submit' value='SIGN OUT' />
              <p className='a83x08'>
                why you want to logout? if you have any issue please give a
                feedback
                <Link href='/support/feedback'>
                  <a>feedback</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
