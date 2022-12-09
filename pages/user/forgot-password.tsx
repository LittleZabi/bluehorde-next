import Link from "next/link";
import { FaCheck, FaUserAlt } from "react-icons/fa";
import Layout from "../../components/Layout";
import { useState } from "react";
import blueRex from "../../utils/blueRex";
export default function ForgotPassword() {
  const [error_, setError] = useState<string | boolean>(false);
  const [user, setUser] = useState<string>();
  const [success, setSuccess] = useState(false);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (user === undefined || user === "") {
      setError("Enter your username or email address!");
      return 0;
    }

    await blueRex
      .post("/api/forgot-password/", { user })
      .then((e) => {
        if (blueRex.status === 200) {
          setSuccess(true);
        } else if (blueRex.status === 422 || blueRex.status === 404) throw e;
      })
      .catch((e) => {
        if (blueRex.status === 422 || blueRex.status === 404) setError(e);
        else console.error(e);
      });
  };
  return (
    <Layout title={"FORGOT PASSWORD "}>
      <div className='sign-view'>
        <div className='sign-page-back'>
          <picture>
            <img src='/media/images/sign-back.jpg' alt='image' />
          </picture>
          <div className='page-layer'></div>
        </div>
        <div className='page-size to-center'>
          <div className='form-view fade-in'>
            <h3>RESET MY PASSWORD</h3>
            <h5>
              enter your username or email address we send a confirmation link
              (for one time use) to your email account. then you can reset your
              password.
            </h5>
            {error_ && <p className='error-text'>{error_}</p>}
            {success ? (
              <div>
                <p className='a-392md'>
                  <FaCheck className='from-right fr2' />
                  <span className='success-text from-right fr4'>
                    successfully sent! check your email.
                  </span>
                  <br />
                  <span className='from-right fr2'>
                    check your email we sent a link in email click on that link
                    then you can change your password.
                  </span>
                </p>
              </div>
            ) : (
              <form autoComplete='off' onSubmit={handleLogin}>
                <div className='flex a90023'>
                  <FaUserAlt />
                  <input
                    type='text'
                    name='user'
                    id='user'
                    placeholder='Enter username or email address'
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                </div>
                <input type='submit' style={{ width: 200 }} value='SUBMIT' />
                <p className='a83x08'>
                  I remember my password
                  <Link href='/user/forgot-password'>
                    <a>Login</a>
                  </Link>
                </p>
                <p className='a83x08'>
                  not a member yet?
                  <Link href='/user/sign-up'>
                    <a>Sign up.</a>
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
