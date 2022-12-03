import Link from "next/link";
import {
  FaEnvelope,
  FaGlobe,
  FaKey,
  FaLock,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import Layout from "../components/Layout";
import { WEBSITE_NAME } from "../utils/constants";

export default function SignIn() {
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
            <form>
              <div className='flex a90023'>
                <FaUserAlt />
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter username'
                  required
                />
              </div>

              <div className='flex a90023'>
                <FaLock />
                <input
                  type='password'
                  name='re-password'
                  placeholder='Your password'
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
              <input type='submit' value='JOIN US' />
              <p className='a83x08'>
                not a member yet?
                <Link href='sign-in'>
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
