import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Layout from "../components/Layout";

export default function SignIn() {
  return (
    <Layout title={"JUST LOGIN"}>
      <div className='sign-view'>
        <div className='page-size to-center'>
          <div className='form-view'>
            <h1>Coming soon</h1>
            <Link href='/'>
              <a className='to-center'>
                <FaHome /> go back
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
