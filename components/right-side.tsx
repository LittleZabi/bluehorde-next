import Link from "next/link";

import { useState, useEffect } from "react";
import blueRex from "../utils/blueRex";
export default function RightSide({ setMessage }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any>([]);
  async function getRecentDevices() {
    setLoading(true);
    await blueRex
      .get("/api/latest_devices/")
      .then((e) => {
        let res = JSON.parse(e);
        setItems(res);
        setLoading(false);
      })
      .catch((e) => {
        setMessage({ message: e, variant: "alert" });
        setLoading(false);
      });
  }
  useEffect(() => {
    getRecentDevices();
  }, []);
  return (
    <div className='right-container'>
      {/* <section>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          labore corporis repellendus at aliquid eaque veritatis, vitae
          doloribus repellat eum sint consequuntur a laboriosam maiores
          assumenda unde impedit nobis distinctio.
        </p>
      </section> */}
      {loading && (
        <>
          <section>
            <div className='search-loading l80 h30'></div>
            <div className='search-loading l40 h20'></div>
          </section>
          <section>
            <div className='search-loading l40 h20'></div>
            <div className='search-loading l80 h30'></div>
            <div className='search-loading l20 h10'></div>
          </section>
          <section>
            <div className='search-loading l40 h20'></div>
            <div className='search-loading l20 h10'></div>
            <div className='search-loading l80 h30'></div>
          </section>
        </>
      )}
      {items.phones?.length > 0 && (
        <section className='fade-in'>
          <h2>Recent upload phones specs</h2>
          <div className='list'>
            {items.phones?.map((item: any, i: number) => (
              <Link href={`/phones/${item.slug}`} key={i}>
                <a className='a0yzp2'>
                  <div>
                    <picture>
                      <img src={item.image} alt={item.name} />
                    </picture>
                    <h4>{item.name}</h4>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      )}

      {items.laptops?.length > 0 && (
        <section className='fade-in'>
          <h2>New Latops Specs</h2>
          <div className='list'>
            {items.laptops?.map((item: any, i: number) => (
              <Link href={`/laptops/${item.slug}`} key={i}>
                <a className='a0yzp2'>
                  <div>
                    <picture>
                      <img src={item.image} alt={item.name} />
                    </picture>
                    <h4>{item.name}</h4>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      )}

      {items.watches?.length > 0 && (
        <section className='fade-in'>
          <h2>Recent upload smart watche{"'s"}</h2>
          <div className='list'>
            {items.watches?.map((item: any, i: number) => (
              <Link href={`/laptops/${item.slug}`} key={i}>
                <a className='a0yzp2'>
                  <div>
                    <picture>
                      <img src={item.image} alt={item.name} />
                    </picture>
                    <h4>{item.name}</h4>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
