import Link from "next/link";
import {
  FaCheck,
  FaEnvelope,
  FaGlobe,
  FaKey,
  FaLock,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { SPECIAL_CHARS, WEBSITE_NAME } from "../../utils/constants";
import { useContext, useEffect, useState } from "react";
import Message from "../../components/message";
import blueRex from "../../utils/blueRex";
import Cookies from "js-cookie";
import { Store } from "../../context/context";
export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState<any>({ notifyme: true });
  const [usernameHandler, setUNameHandler] = useState<any>(false);
  const [message, setMessage] = useState<any>(false);
  const [loading, setLoading] = useState(false);
  const [reqTime, setReqTime] = useState<any>(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (Cookies.get("user")) {
      router.push("/user/sign-out?a=from-login");
    }
  }, [router]);

  const setUsername = async (username: string) => {
    username = username.trim().toLowerCase();
    if (username.split(" ").length > 1) {
      setUNameHandler({
        variant: "error-text",
        message: "spaces is not allowed in username!",
      });
      return 0;
    }
    if (SPECIAL_CHARS.test(username)) {
      setUNameHandler({
        variant: "error-text",
        message: `special characters is not allowed in username!`,
      });
      return 0;
    }
    setUNameHandler(false);
    if (reqTime) clearTimeout(reqTime);
    let x = setTimeout(async () => {
      await blueRex
        .get("/api/is-user-exist/", { username })
        .then((e) => {
          if (e === "exist") {
            setUNameHandler({
              variant: "error-text",
              message: `username is already taken choose another one!`,
            });
          } else {
            setUNameHandler({
              variant: "success-text",
              message: `username is available!`,
            });
          }
        })
        .catch((e) => console.log(e));
      setUser({ ...user, username });
    }, 1000);
    setReqTime(x);
  };
  const sendUserData = async () => {
    await blueRex
      .post("/api/sign-up/", user)
      .then((e) => {
        setLoading(false);
        if (blueRex.status == 200) {
          setSuccess(true);
          return 1;
        } else if (blueRex.status == 422) throw e;
        else throw `Unknown Error occured! (${e.length < 100 ? e : ""})`;
      })
      .catch((e) => {
        if (blueRex.status == 422)
          setMessage({
            message: e,
            variant: "error",
          });
        console.error(e);
        setLoading(false);
      });
  };
  const handleForm = (e: any) => {
    e.preventDefault();
    if (user.username === undefined || user.username === "") {
      setMessage({
        message: "Username is required! Please enter a unique username",
        variant: "error",
      });
      return;
    }
    if (user.email === undefined || user.email === "") {
      setMessage({
        message: "Please enter your email address!",
        variant: "error",
      });
      return;
    }
    if (user.fullname === undefined || user.fullname === "") {
      setMessage({
        message: "Please enter your fullname!",
        variant: "error",
      });
      return;
    }
    if (user.country === undefined || user.country === "") {
      setMessage({
        message: "Please enter your country name!",
        variant: "error",
      });
      return;
    }
    if (
      user.password === undefined ||
      user.password === "" ||
      user.password.length < 8
    ) {
      setMessage({
        message: "Please enter a password! minimum 8 characters is required",
        variant: "error",
      });
      return;
    }
    if (user.password !== user.repassword) {
      setMessage({
        message: "password not matched please enter password again!",
        variant: "error",
      });
      return;
    }
    sendUserData();
  };
  return (
    <Layout title={"REGISTER & ACCESS "}>
      {message && (
        <Message
          handleClose={() => setMessage(false)}
          message={message.message}
          variant={message.variant}
        />
      )}
      <div className='sign-view'>
        <div className='sign-page-back'>
          <picture>
            <img src='/media/images/sign-back.jpg' alt='image' />
          </picture>
          <div className='page-layer'></div>
        </div>
        <div className='page-size to-center'>
          <div className='form-view fade-in'>
            <h3>BECOME A {WEBSITE_NAME} MEMBER</h3>
            <h5>
              Create your {WEBSITE_NAME} Member profile and get full access to
              our products and buy things, Inspiration and community.
            </h5>
            {success === false ? (
              <form onSubmit={handleForm} autoComplete='off'>
                {usernameHandler && (
                  <span className={usernameHandler.variant}>
                    {usernameHandler.message}
                  </span>
                )}

                <div className='flex a90023'>
                  <FaUserAlt />
                  <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Enter username'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <span>Enter a unique username</span>
                <div className='flex a90023'>
                  <FaEnvelope />
                  <input
                    type='email'
                    name='email-address'
                    placeholder='Enter your email address'
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className='flex a90023'>
                  <FaUserCircle />
                  <input
                    type='text'
                    name='full-name'
                    placeholder='Your fullname'
                    onChange={(e) =>
                      setUser({ ...user, fullname: e.target.value })
                    }
                    required
                  />
                </div>
                <div className='flex a90023'>
                  <FaLock />
                  <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
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
                <div className='flex a90023'>
                  <FaGlobe />
                  <input
                    type='text'
                    name='country'
                    placeholder='Your country name'
                    onChange={(e) =>
                      setUser({ ...user, country: e.target.value })
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
                    onChange={(e) =>
                      setUser({ ...user, notifyme: e.target.checked })
                    }
                  />
                  <label htmlFor='check-box'>
                    Sign up for emails to get updates from {WEBSITE_NAME} on
                    products, offers, and your Member benefits.
                  </label>
                </div>
                <p>
                  By creating an account you agree to {WEBSITE_NAME}
                  {"'s"} <a href='privacy-policy'>Privacy Policy</a> and{" "}
                  <a href='terms-of-use'>Terms of Use</a>.
                </p>
                <button type='submit' disabled={loading}>
                  {loading ? (
                    <div className='loading-spinner'></div>
                  ) : (
                    "JOIN US"
                  )}
                </button>
                <p className='a83x08'>
                  Already a member?
                  <Link href='sign-in'>
                    <a>Sign in.</a>
                  </Link>
                </p>
              </form>
            ) : (
              <div>
                <p className='a-392md'>
                  <FaCheck className='from-right fr2' />
                  <span className='success-text from-right fr4'>
                    Account detail saved successfully! check email and confirm.
                  </span>
                  <br />
                  <span className='from-right fr2'>
                    we send a email to your {user.email} check email and confirm
                    your account.
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
