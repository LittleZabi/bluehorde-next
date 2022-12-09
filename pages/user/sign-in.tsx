import Link from "next/link";
import { useRouter } from "next/router";
import { FaLock, FaUserAlt } from "react-icons/fa";
import Layout from "../../components/Layout";
import { WEBSITE_NAME } from "../../utils/constants";
import { useState, useEffect, useContext } from "react";
import blueRex from "../../utils/blueRex";
import { Store } from "../../context/context";
import Cookies from "js-cookie";
export default function SignIn() {
  const router = useRouter();
  const [error_, setError] = useState<string | boolean>(false);
  const [user, setUser] = useState<any>({});
  const { state, dispatch } = useContext<any>(Store);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (Cookies.get("user")) {
      router.push("/user/sign-out?a=from-login");
    }
  }, [router]);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (user.username === undefined || user.username === "") {
      setError("Enter your username!");
      return 0;
    }
    if (user.password === undefined || user.password === "") {
      setError("Enter your password!");
      return 0;
    }
    setLoading(true);
    await blueRex
      .post("/api/sign-in/", user)
      .then((e) => {
        setLoading(false);
        if (blueRex.status === 200) {
          const user = JSON.parse(e);
          dispatch({ type: "LOGIN", payload: user });
          Cookies.set("user", e, { expires: 365, path: "/" });
          let redirect = router.query.redirect
            ? `/${router.query.redirect}`
            : "/";
          router.push(redirect);
        } else if (blueRex.status === 422 || blueRex.status === 404) throw e;
      })
      .catch((e) => {
        setLoading(false);
        if (e === "passwordIncorrect")
          setError("password is incorrect! try again");
        if (e === "userNotFound")
          setError("username or password is incorrec! try again");
        else if (e === "ErrorOnUserInfo")
          setError("username or password is missing!");
        else console.error(e);
      });
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
            <h3>SIGN IN TO {WEBSITE_NAME}</h3>
            <h5>
              Login to your profile and get full access to our products and buy
              things, Inspiration and community.
            </h5>

            {error_ && <p className='error-text'>{error_}</p>}

            <form autoComplete='off' onSubmit={handleLogin}>
              <div className='flex a90023'>
                <FaUserAlt />
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter username'
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  required
                />
              </div>

              <div className='flex a90023'>
                <FaLock />
                <input
                  type='password'
                  name='re-password'
                  placeholder='Your password'
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
              </div>

              <div className='a9382nck'>
                <input
                  type='checkbox'
                  defaultChecked={true}
                  name='notify-me'
                  id='check-box'
                />
                <label htmlFor='check-box'>Keep me logged!</label>
              </div>
              <button type='submit' disabled={loading}>
                {loading ? <div className='loading-spinner'></div> : "SIGN IN"}
              </button>
              <p className='a83x08'>
                I forgot my password
                <Link href='/user/forgot-password'>
                  <a className='error-text'>click here to reset.</a>
                </Link>
              </p>
              <p className='a83x08'>
                not a member yet?
                <Link href='/user/sign-up'>
                  <a>Sign up.</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
