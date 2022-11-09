import Link from "next/link";
import { useEffect, useState } from "react";
import { itemPerPage, paginateButtonShow } from "../utils/config";
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
const Pagination = ({ pageNo, renderFor, api_qstrings }) => {
  const [totalPages, setTotalPages] = useState<any>([]);
  const [totalPagesLen, setTotalPagesLen] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [rendPagi, setRendPag] = useState(true);
  useEffect(() => {
    setupPagination();
  }, [pageNo, api_qstrings]);
  const setupPagination = async () => {
    setLoading(true);
    const res = await fetch(`/api/pagination?${api_qstrings}`)
      .then((e) => e.json())
      .catch((e) => e);
    if (res) {
      if (res <= itemPerPage) {
        setRendPag(false);
        return;
      }
      let g = Math.abs(Math.ceil(res / itemPerPage));
      setTotalPagesLen(g);
      let s = [];
      let midPagination = 1;
      if (pageNo > paginateButtonShow - 2) {
        midPagination =
          Number(pageNo) - Math.abs(Math.ceil(paginateButtonShow / 2));
      }
      for (let i = midPagination; i < paginateButtonShow + midPagination; i++) {
        if (i > g) break;
        s.push(i);
      }
      setTotalPages(s);
      setLoading(false);
    }
  };
  return (
    <div className='pagination'>
      {!loading && rendPagi && (
        <>
          <div className='abc-abc'>
            <p>
              Page {pageNo} of {totalPagesLen}
            </p>
          </div>
          <div className='pagination-links'>
            {totalPages[0] != 1 && (
              <Link href={`${renderFor}/1`}>
                <a title='Go to first page' className='utkalx'>
                  <FaAngleDoubleRight className='rotate-180' />
                </a>
              </Link>
            )}
            {
              <Link href={`${renderFor}/${pageNo === 1 ? 1 : pageNo - 1}`}>
                <a title='back to previous page' className='utkalx'>
                  <FaAngleRight className='rotate-180' />
                </a>
              </Link>
            }
            {totalPages?.map((e: any) => {
              return (
                <Link key={e} href={`${renderFor}/${e}`}>
                  <a
                    title={`Go to page ${e}`}
                    className={e == pageNo ? "active" : "not-active"}
                  >
                    {e}
                  </a>
                </Link>
              );
            })}
            {
              <Link
                href={`${renderFor}/${
                  pageNo >= totalPagesLen ? pageNo : pageNo + 1
                }`}
              >
                <a
                  title={
                    pageNo >= totalPagesLen
                      ? ""
                      : `Go to next page ${
                          pageNo >= totalPagesLen ? pageNo : pageNo + 1
                        }`
                  }
                  className='utkalx'
                >
                  <FaAngleRight />
                </a>
              </Link>
            }
            {totalPagesLen != totalPages[totalPages.length - 1] && (
              <Link href={`${renderFor}/${totalPagesLen}`}>
                <a title='Go to last page' className='utkalx'>
                  <FaAngleDoubleRight />
                </a>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
