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
                <a
                  className={pathname == "sign-in" ? "active" : "c"}
                  href='#'
                  title='just login'
                >
                  SIGN IN
                </a>
              </li>
              <li>
                <a
                  className={pathname == "sign-up" ? "active" : "c"}
                  href='#'
                  title='create a new account'
                >
                  SIGN UP
                </a>
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
                <Link href=''>
                  <a href='#'>Smart Watches</a>
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
    </header>
  );
}

export default Header;
