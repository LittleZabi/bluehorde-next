import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import blueRex from "../utils/blueRex";
const Search = ({ className = "" }) => {
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [searchRes, setSearchRes] = useState<any>();
  const [searchTimeOut, setSearchTimeOut] = useState<any>(false);
  const [dataLen, setDataLen] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e: any) => {
    const strings_ = e.target.value;
    if (strings_.length < 1) {
      setSearchModal(false);
      return 1;
    } else {
      setSearchModal(true);
    }
    if (searchTimeOut) clearTimeout(searchTimeOut);
    setLoading(true);
    let x = setTimeout(async function () {
      await blueRex
        .get("/api/search/", { q: strings_ })
        .then((e) => {
          let res = JSON.parse(e);
          setDataLen(res.data_len);
          if (res.data_len > 0) {
            setSearchRes(res);
          }
          setLoading(false);
        })
        .catch((e) => {
          console.log("error: ", e);
          setLoading(false);
        });
    }, 1000);
    setSearchTimeOut(x);
  };
  return (
    <div className={`blue-ii1sx ${className}`} id='u-293kx'>
      <div className='search-input'>
        <input
          onChange={handleSearch}
          type='input'
          placeholder='Take easy to find! search here...'
        />
        <BsSearch />
      </div>
      {searchModal && (
        <div className='search-result fade-in'>
          <div className='flex'>
            {loading && <h4>Searching...</h4>}
            {!loading && dataLen > 0 ? (
              <h4>{dataLen} Results found</h4>
            ) : loading === false ? (
              <h4>0 Results found</h4>
            ) : (
              ""
            )}
            <button title='close results' onClick={() => setSearchModal(false)}>
              &times;
            </button>
          </div>
          {loading && (
            <>
              <div className='search-loading l40 h20'></div>
              <div className='search-loading l80 h30'></div>
              <div className='search-loading l20 h10'></div>
              <div className='search-loading l40 h20'></div>
            </>
          )}
          {searchRes?.phones && searchRes.phones.length > 0 ? (
            <>
              {dataLen > 0 ? (
                <h2>Phones Results</h2>
              ) : (
                <h2>Recent phones search</h2>
              )}

              <section>
                {searchRes.phones?.map((items: any, i: number) => {
                  return (
                    <Link key={i} href={`/phones/${items["slug"]}`}>
                      <a>
                        <picture>
                          <img src={items["image"]} alt={items["name"]} />
                        </picture>
                        <span>{items["name"]}</span>
                      </a>
                    </Link>
                  );
                })}
              </section>
            </>
          ) : (
            ""
          )}
          {searchRes?.laptops && searchRes.laptops.length > 0 ? (
            <>
              {dataLen > 0 ? (
                <h2>Laptops Results</h2>
              ) : (
                <h2>Recent laptops search</h2>
              )}
              <section>
                {searchRes.laptops?.map((items: any, i: number) => {
                  return (
                    <Link key={i} href={`/laptops/${items["slug"]}`}>
                      <a>
                        <picture>
                          <img src={items["image"]} alt={items["name"]} />
                        </picture>
                        <span>{items["name"]}</span>
                      </a>
                    </Link>
                  );
                })}
              </section>
            </>
          ) : (
            ""
          )}
          {searchRes?.categories && searchRes.categories.length > 0 ? (
            <>
              {dataLen > 0 ? (
                <h2>Categories</h2>
              ) : (
                <h2>Recent categories search</h2>
              )}
              <section className='categories-sec'>
                {searchRes.categories?.map((items: any, i: number) => {
                  return (
                    <Link
                      key={i}
                      href={`/phones/category/${items["category"]}`}
                    >
                      <a>
                        <picture>
                          <img
                            src={`/media/logos/${items["category"]}.png`}
                            alt={items["category"]}
                          />
                        </picture>
                        <span>{items["category"]}</span>
                      </a>
                    </Link>
                  );
                })}
              </section>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
