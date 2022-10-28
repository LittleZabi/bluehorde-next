import { WEBSITE_NAME } from "../utils/constants";
import { HiHome } from "react-icons/hi";
import { BsBellFill } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className='page-size'>
        <ul>
          <Link href='/'>
            <a>
              <span>{WEBSITE_NAME}</span>
            </a>
          </Link>
          <div>
            <ul>
              <li>
                <a href='#' title='just login'>
                  SIGN IN
                </a>
              </li>
              <li>
                <a href='#' title='create a new account'>
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <ul>
          <li>
            <Link href='/'>
              <a>
                <HiHome />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/categories'>
              <a>Categories</a>
            </Link>
          </li>
          <li>
            <Link href='/rated'>Top Rated</Link>
          </li>
          <li>
            <Link href='/gadgets'>Gadgets</Link>
          </li>
          <li>
            <Link href='/blue'>Blueterminal</Link>
          </li>
          <li>
            <Link href='/welcome'>
              <a className='flex-center'>
                <BsBellFill />
                <span>Say Hi</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
