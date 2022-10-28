import Link from "next/link";

export default function RightSide() {
  return (
    <div className='right-container'>
      <section>
        <h2>Latest Devices</h2>
        <div className='list'>
          <Link href='/aorb'>
            <a className='a0yzp2'>
              <div>
                <picture>
                  <img src='/media/assets/catego.png' alt='' />
                </picture>
                <h4>Samsung Galaxy a02</h4>
              </div>
            </a>
          </Link>
          <Link href='/aorb'>
            <a className='a0yzp2'>
              <div>
                <picture>
                  <img src='/media/assets/catego.png' alt='' />
                </picture>
                <h4>Samsung Galaxy a02</h4>
              </div>
            </a>
          </Link>
          <Link href='/aorb'>
            <a className='a0yzp2'>
              <div>
                <picture>
                  <img src='/media/assets/catego.png' alt='' />
                </picture>
                <h4>Samsung Galaxy a02</h4>
              </div>
            </a>
          </Link>
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
