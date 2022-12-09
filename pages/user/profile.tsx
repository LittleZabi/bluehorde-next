import Layout from "../../components/Layout";
import { useState, useEffect, useContext } from "react";
import { Store } from "../../context/context";
import { useRouter } from "next/router";
import { setUserCharName } from "../../utils/common";
import {
  FaGlobe,
  FaKey,
  FaLock,
  FaUserCircle,
  FaUserLock,
} from "react-icons/fa";
import moment from "moment";
import blueRex from "../../utils/blueRex";
import { PassReq } from "../../modals/password-req";
import Message from "../../components/message";
export default function Profile() {
  const [user, setUser] = useState<any>();
  const [userPassword, setUserPassword] = useState<any>({});
  const { state, dispatch } = useContext<any>(Store);
  const [profile, setProfile] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("basic_details");
  const [message, setMessage] = useState<any>();
  const [passConfirm, setPassConfirm] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!state.user) {
      router.push("/user/sign-in?redirect=/user/profile");
      return;
    }
    setUser(state.user);
    getUser(state.user._id);
  }, [router]);
  const getUser = async (user: string) => {
    setLoading(true);
    if (state.user) {
      await blueRex
        .get("/api/user", { user })
        .then((e) => {
          setLoading(false);
          if (blueRex.status === 200) {
            setUser(JSON.parse(e));
          } else throw e;
        })
        .catch((e) => {
          setLoading(false);
          console.error(e);
        });
    } else {
      router.push("/user/login?redirect=/user/profile");
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (
      userPassword.old_password === undefined ||
      userPassword.old_password === ""
    ) {
      setMessage({ message: "old password is required!", variant: "error" });
      return 1;
    } else if (
      userPassword.new_password === undefined ||
      userPassword.new_password === ""
    ) {
      setMessage({ message: "Enter your new password!", variant: "error" });
      return 1;
    } else if (userPassword.new_password.length < 8) {
      setMessage({
        message: "Password must be greater than 8 characters!",
        variant: "error",
      });
      return 1;
    } else if (userPassword.new_password !== userPassword.re_password) {
      setMessage({
        message: "password not matched try again!",
        variant: "error",
      });
      console.log("ehloo", message);
      return 1;
    }
    setPassConfirm(true);
  };
  const saveNewPassword = async () => {
    await blueRex
      .post("/api/user", { ...userPassword, update_password: 1, _id: user._id })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Layout
      title={`${
        user?.username ? "@" + user.username + " | PROFILE" : "PROFILE"
      } `}
    >
      {passConfirm && <PassReq callback={saveNewPassword} />}
      {message && (
        <Message
          message={message.message}
          variant={message.variant}
          handleClose={() => setMessage(false)}
        />
      )}
      <div className='profile-view flex flex-center'>
        {user ? (
          <div className='page-size container'>
            <div className='left'>
              <div className='left-profile'>
                {user.image ? (
                  <picture>
                    <img src={user.image} alt='' />{" "}
                  </picture>
                ) : (
                  <div className='a-kpow2'>
                    {setUserCharName(user.fullname)}
                  </div>
                )}
                <p className='profile-username'>@{user.username}</p>
                <span className='db fs-13 tac df ac'>
                  <svg
                    className='icon-22 mr-3'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <g>
                      <path d='M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z'></path>
                    </g>
                  </svg>
                  Joined {moment(user.createdAt).fromNow()}
                </span>
              </div>
              <ul className='mt-25'>
                <li
                  className={info === "basic_details" ? "active" : ""}
                  onClick={() => setInfo("basic_details")}
                >
                  Basic Details
                </li>
                <li
                  className={info === "password" ? "active" : ""}
                  onClick={() => setInfo("password")}
                >
                  Password
                </li>
                <li>information</li>
              </ul>
            </div>
            <div className='right'>
              {info === "basic_details" && (
                <div className='sign-view'>
                  <div className='form-view fade-in'>
                    <h2>User Profile</h2>
                    <form onSubmit={handleForm} autoComplete='off'>
                      <div className='m-20 a-9x9x9x9'>
                        <span className='a-clowa'>Email address:</span>
                        <span>{user.email}</span>
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
                          value={user.fullname}
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
                          value={user.country}
                          required
                        />
                      </div>
                      <button type='submit' disabled={loading}>
                        {loading ? (
                          <div className='loading-spinner'></div>
                        ) : (
                          "SAVE"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {info === "password" && (
                <div className='sign-view'>
                  <div className='form-view fade-in'>
                    <h2>Change Password</h2>
                    <form onSubmit={handleChangePassword} autoComplete='off'>
                      <label
                        className='mt-25 db fs-14 ml-10'
                        htmlFor='password'
                      >
                        Enter your old password.
                      </label>
                      <div className='flex a90023'>
                        <FaUserLock />
                        <input
                          type='password'
                          name='password'
                          placeholder='Enter your old password.'
                          onChange={(e) =>
                            setUserPassword({
                              ...userPassword,
                              old_password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <label
                        className='mt-10 db fs-14 ml-10'
                        htmlFor='password'
                      >
                        Your new password.
                      </label>
                      <div className='flex a90023'>
                        <FaLock />
                        <input
                          type='password'
                          name='new-password'
                          placeholder='Enter your new password.'
                          onChange={(e) =>
                            setUserPassword({
                              ...userPassword,
                              new_password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <label
                        className='mt-10 db fs-14 ml-10'
                        htmlFor='password'
                      >
                        Re-enter your new password.
                      </label>
                      <div className='flex a90023'>
                        <FaKey />
                        <input
                          type='password'
                          name='re-new-password'
                          placeholder='Enter your new password again.'
                          onChange={(e) =>
                            setUserPassword({
                              ...userPassword,
                              re_password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <button type='submit' disabled={loading}>
                        {loading ? (
                          <div className='loading-spinner'></div>
                        ) : (
                          "Change Password"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Need to login now</p>
        )}
      </div>
    </Layout>
  );
}
