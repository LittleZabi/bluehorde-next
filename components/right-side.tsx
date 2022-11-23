import Link from "next/link";

import { useState, useEffect } from "react";
import blueRex from "../utils/blueRex";
export default function RightSide() {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any>([]);
  const [message, setMessage] = useState<any>(false);
  async function getRecentDevices() {
    await blueRex
      .get("/api/latest_devices/")
      .then((e) => {
        let res = JSON.parse(e);
        setItems(res);
        console.log(res);
      })
      .catch((e) => {
        console.log("error: ", e);
        setLoading(false);
      });
  }
  useEffect(() => {
    getRecentDevices();
  }, []);
  return (
    <div className='right-container'>
      <section>
        <h2>Latest Phones Devices</h2>
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
      <section>
        <h2>Latest Laptops Devices</h2>
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
      <section>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          labore corporis repellendus at aliquid eaque veritatis, vitae
          doloribus repellat eum sint consequuntur a laboriosam maiores
          assumenda unde impedit nobis distinctio.
        </p>
      </section>
      <section>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          labore corporis repellendus at aliquid eaque veritatis, vitae
          doloribus repellat eum sint consequuntur a laboriosam maiores
          assumenda unde impedit nobis distinctio.
        </p>
      </section>
    </div>
  );
}
