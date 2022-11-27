import { WEBSITE_NAME } from "../utils/constants";
import { HiHome } from "react-icons/hi";
import { BsBellFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  let pathname: string[] | string = router.pathname.split("/");
  if (pathname[1] === "") pathname = pathname[0];
  else pathname = pathname[1];
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
                <Link href='/sign-in'>
                  <a className={pathname == "sign-in" ? "active" : "c"}>
                    SIGN IN
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/sign-up'>
                  <a
                    className={pathname == "sign-up" ? "active" : "c"}
                    title='create a new account'
                  >
                    SIGN UP
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </ul>
        <ul>
          <li>
            <Link href='/'>
              <a
                className={
                  pathname === "" || pathname === "home" ? "active" : ""
                }
              >
                <HiHome />
              </a>
            </Link>
          </li>
          <li className='drop-down-hie'>
            <Link href='categories'>
              <a className={pathname == "categories" ? "active" : "c"}>
                Categories
              </a>
            </Link>
            <div className='h-drop-down'>
              <div className='i93kx'>
                <Link href='/phones'>
                  <a>Mobile Phones</a>
                </Link>
                <Link href='/laptops'>
                  <a>Pc Laptops</a>
                </Link>
                <Link href='/watches'>
                  <a>Smart Watches</a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href='/rated'>
              <a className={pathname == "rated" ? "active" : "c"}>Top Rated</a>
            </Link>
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
      <svg
        width='1366'
        height='93'
        viewBox='0 0 1366 93'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='header-bg'
      >
        <path
          d='M0 41V0L1365.5 1.5V41C1272.5 41 1199.38 86.4601 1170.5 90C1093 99.5 1047.5 71.5 986.5 76C956 78.25 884 90 860 90C824.345 90 785 100.5 695 76C626.295 57.2968 507.5 68.5 474.5 76C422.328 87.8572 366 89.5 322 76C244.085 52.0942 175.5 47.5 123.5 54C47.5986 63.4877 25.1667 40 0 41Z'
          fill='black'
        />
      </svg>
    </header>
  );
}

export default Header;
