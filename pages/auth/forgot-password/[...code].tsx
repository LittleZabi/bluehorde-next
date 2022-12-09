import { useRouter } from "next/router";
import { FaKey, FaLock, FaTimesCircle } from "react-icons/fa";
import Layout from "../../../components/Layout";
import { solveForgotPassword } from "../../../lib/data-store";
import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import blueRex from "../../../utils/blueRex";
import { Store } from "../../../context/context";
import Cookies from "js-cookie";
export default function Auth({ user_ }) {
  const router = useRouter();
  const [error_, setError] = useState<string | boolean>(false);
  const [user, setUser] = useState<any>({});
  const [userInfo, setUserInfo] = useState(JSON.parse(user_));
  const { state, dispatch } = useContext<any>(Store);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (user.password === undefined || user.password === "") {
      setError("Enter your new password!");
      return 0;
    }
    if (user.password.length < 8) {
      setError("Password must be greater then 8 characters!");
      return 0;
    }
    if (user.password !== user.repassword) {
      setError("Passwords not matched!");
      return 0;
    }
    setLoading(true);
    await blueRex
      .post("/api/reset-password/", { ...user, _id: userInfo._id })
      .then((e) => {
        setLoading(false);
        if (blueRex.status === 200) {
          const user = JSON.parse(e);
          dispatch({ type: "LOGIN", payload: user });
          Cookies.set("user", e);
          let redirect = router.query.redirect
            ? `/${router.query.redirect}`
            : "/";
          router.push(redirect);
        }
      })
      .catch((e) => {
        setLoading(false);
        if (blueRex.status === 422 || blueRex.status === 404) setError(e);
        else console.error(e);
      });
  };
  return (
    <Layout title={"Authenticate User"}>
      {userInfo.status ? (
        <div className='page-size sign-view auth-view'>
          <div className='page-size to-center'>
            <div className='form-view fade-in'>
              <h3>ENTER NEW PASSWORD</h3>
              <h5>
                Hi{"'"} {userInfo.fullname} you account successfully
                authenticated now you change your password.
              </h5>
              {error_ && <p className='error-text'>{error_}</p>}
              <form autoComplete='off' onSubmit={handleLogin}>
                <div className='flex a90023'>
                  <FaLock />
                  <input
                    type='password'
                    name='re-password'
                    placeholder='Your new password'
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    required
                  />
                </div>
                <span>Enter password minimum 8 characters</span>
                <div className='flex a90023'>
                  <FaKey />
                  <input
                    type='password'
                    name='re-password'
                    placeholder='Re-type password'
                    onChange={(e) =>
                      setUser({ ...user, repassword: e.target.value })
                    }
                    required
                  />
                </div>
                <button type='submit' disabled={loading}>
                  {loading ? (
                    <div className='loading-spinner'></div>
                  ) : (
                    "SAVE PASSWORD"
                  )}
                </button>
                <p className='a83x08'>
                  keep secure your password if you found any vulnerability of
                  passowrd or security then
                  <Link href='/support/feedback'>
                    <a>give a feedback</a>
                  </Link>
                  . thanks
                </p>
                {/* <p className='a83x08'>
                  need help
                  <Link href='/support/feedback'>
                    <a className='error-text'>how to change account password</a>
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className='auth-view'>
          <div className='auth-in-view'>
            <div className='on-error'>
              <h2>Authentication Failed!</h2>
              <p className='kk-l1111'>
                {" "}
                <FaTimesCircle />
                Issue on forgot password
              </p>
              <p>
                Your unique link is used before or {"it's"} incorrect. please
                make sure your link is correct and you using it first time.
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const code: any = context.params.code[0];
  const user: any = await solveForgotPassword(code);
  console.log("__________", user);
  if (user === "") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user_: JSON.stringify(user),
    },
  };
}
