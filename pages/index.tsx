import Link from "next/link";
import Layout from "../components/Layout";
import LogosStrip from "../components/logos-strip";
import MiddleView from "../components/middle";
export default function Home() {
  return (
    <Layout title={"Welcome "}>
      <MiddleView />
      <div className='home-view'>
        <div className='page-size blue-trpwx'>
          <div className='ieotax'>
            <section className='flex-center'>
              <div className='blue-xls blue-kkrds laptop-38cs'>
                <div className='layer-2eic a-3xacw'>
                  <div className='a-38ncksoe'>
                    <Link href='/watches/'>
                      <a>
                        <h5>Smart Watches</h5>
                      </a>
                    </Link>
                    <span>ou review and experience with us.</span>
                  </div>
                </div>
                <div>
                  <picture>
                    <img
                      className='watch-123'
                      src='/media/images/watch.jpg'
                      alt='laptop'
                    />
                  </picture>
                </div>
              </div>
              <div className='blue-xls blue-kkrds laptop-38cs'>
                <div className='layer-2eic a-3xacw'>
                  <div className='a-38ncksoe'>
                    <Link href='/watches/'>
                      <a>
                        <h5>Listen find Good Ear buds</h5>
                      </a>
                    </Link>
                    <span>Keeping in mind best ear buds</span>
                  </div>
                </div>
                <div>
                  <picture>
                    <img
                      className='watch-123'
                      src='/media/images/buds.jpg'
                      alt='laptop'
                    />
                  </picture>
                </div>
              </div>
            </section>
            <div className='blue-xls blue-kkrds laptop-38cs'>
              <div className='layer-2eic'>
                <div>
                  <Link href='/laptops'>
                    <a>
                      <h2>Get Hi-Speed Laptop & Desktop</h2>
                    </a>
                  </Link>
                  <h5>Build up your life</h5>
                  <span>
                    Here is best specification of desktop and laptops for
                    gaming, studies, coding and office works. find out best and
                    drop you review and experience with us.
                  </span>
                </div>
              </div>
              <div>
                <picture>
                  <img src='/media/images/laptop.jpg' alt='laptop' />
                </picture>
              </div>
            </div>
          </div>
          <div>
            <div className='blue-xls blue-tts-full'>
              <Link href='/phones'>
                <a>
                  <h3>Find Mobiles Specs!</h3>
                </a>
              </Link>
              <picture>
                <img src='/media/images/phone-1.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
        <LogosStrip />
      </div>
    </Layout>
  );
}
