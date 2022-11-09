import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = ({ slug, page, renderFor }) => (
  <div>
    <div className='breadcrumb'>
      <Link href='/'>
        <a>
          Home
          <FaChevronRight />
        </a>
      </Link>
      <Link href={`/${renderFor}`}>
        <a>
          {renderFor}
          <FaChevronRight />
        </a>
      </Link>
      {page > 1 ? (
        <Link href={`/${renderFor}/category/${slug}`}>
          <a>
            {slug}
            <FaChevronRight />
          </a>
        </Link>
      ) : (
        slug
      )}
      {page > 1 ? `page ${page}` : ""}
    </div>
  </div>
);
export default BreadCrumb;
