import Layout from "../../components/Layout";
import { getLaptop } from "../../lib/data-store";
import PPricingRender from "../../components/render-phone-pricing";
import {
  FaCheck,
  FaFire,
  FaHeart,
  FaMemory,
  FaThumbsDown,
  FaTimes,
} from "react-icons/fa";
import { EcomStore } from "../../utils/ecom-store-list";
import Reviews from "../../components/reviews";
import { useInView } from "react-intersection-observer";
import RenderLaptopSpecs from "../../components/render-laptop-specs";
import { useState } from "react";
import Message from "../../components/message";
export default function MobileView(props: any) {
  const [message, setMessage] = useState<any>(false);
  const items = props.laptop && props.laptop[0];
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <Layout title={items?.name}>
      {message && (
        <Message message={message.message} variant={message.variant} />
      )}
      <div className='mobile-view fade-in laptop-view'>
        <div className='page-size mobile-top-view'></div>
        {items != undefined && items.length !== 0 && (
          <>
            <div className='page-size mobile-top-taxc-view'>
              <div className='ks302kd'>
                <picture>
                  <img
                    src={items?.image}
                    title={items?.name}
                    alt={items?.name}
                    ref={ref}
                    className={
                      inView
                        ? "slide-in-obsrvr layer"
                        : "slide-in-obsrvr-init layer"
                    }
                  />
                </picture>
                <div className='a83xowx'>
                  <h4>
                    Popularity <small>Live Updating</small>
                  </h4>
                  <span>
                    <FaFire />
                    {items?.hits} 32342 <small>Views</small>
                  </span>
                  <span>
                    <FaHeart />
                    {items?.fans}23423 <small>Loves</small>
                  </span>
                  <button
                    className='a93lx0e'
                    onClick={() => alert("add a heart!")}
                  >
                    Like <FaThumbsDown />
                  </button>
                </div>
              </div>
              <div className='a3i302kc'>
                <svg
                  id='Component_1_1'
                  data-name='Component 1 – 1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='1837'
                  height='884'
                  viewBox='0 0 1837 884'
                >
                  <circle
                    id='Ellipse_1'
                    data-name='Ellipse 1'
                    cx='172.5'
                    cy='172.5'
                    r='172.5'
                    fill='rgba(0,255,25,0.39)'
                  />
                  <circle
                    id='Ellipse_2'
                    data-name='Ellipse 2'
                    cx='172.5'
                    cy='172.5'
                    r='172.5'
                    transform='translate(693 405)'
                    fill='rgba(0,255,25,0.39)'
                  />
                  <circle
                    id='Ellipse_3'
                    data-name='Ellipse 3'
                    cx='172.5'
                    cy='172.5'
                    r='172.5'
                    transform='translate(1492 539)'
                    fill='rgba(0,255,25,0.39)'
                  />
                </svg>
                <h2
                  ref={ref}
                  className={inView ? "from-right fr1" : "from-right-init"}
                >
                  {items?.name}
                </h2>
                <h3
                  ref={ref}
                  className={inView ? "from-right fr3" : "from-right-init"}
                >
                  {items?.subtitle}
                </h3>
                {items && (
                  <>
                    <h5
                      ref={ref}
                      className={inView ? "from-right fr2" : "from-right-init"}
                    >
                      {items["cpu"]} CPU
                    </h5>
                    <h5
                      ref={ref}
                      className={inView ? "from-right fr3" : "from-right-init"}
                    >
                      {items["ram"]} RAM
                    </h5>
                    <h5
                      ref={ref}
                      className={inView ? "from-right fr4" : "from-right-init"}
                    >
                      {items["display"]} Wide Display
                    </h5>
                    <h5
                      ref={ref}
                      className={inView ? "from-right fr3" : "from-right-init"}
                    >
                      <picture>
                        <img
                          src={`/media/logos/${items["category"]}.png`}
                          alt={items["category"]}
                        />
                      </picture>{" "}
                      <small>{items["category"]} brand laptop</small>
                    </h5>
                  </>
                )}
              </div>
            </div>
            <div className='mobile-middle'>
              <div className='page-size'>
                <div className='mobile-middle-top'>
                  <div className='mobile-keolxl fade-in'>
                    <section>
                      <picture>
                        <img
                          src='/media/assets/calendar.png'
                          alt='release date'
                          title='Laptop Release date'
                        />
                      </picture>
                      <p>Release date</p>
                      <span>
                        {items["release_date"] ?? new Date().toDateString()}
                      </span>
                    </section>
                    <span className='line-v'></span>
                    <section>
                      <FaMemory />
                      <p>Laptop Memory</p>
                      <span>{items["ram"] ?? "Enough Storage/Memory"}</span>
                    </section>
                    <span className='line-v'></span>
                    <section>
                      <picture>
                        <img
                          src='/media/assets/chip.png'
                          alt='laptop chip'
                          title={items["ram"]}
                        />
                      </picture>
                      <p>CPU Information</p>
                      <span>{items["cpu"] ?? "Intel Celeron"}</span>
                    </section>
                    <span className='line-v'></span>
                    <section>
                      <picture>
                        <img
                          src='/media/assets/wifi.png'
                          alt='laptop wifi'
                          title='laptop wifi information'
                        />
                      </picture>
                      <p>Wifi</p>
                      <span>{items["wifi"]}</span>
                    </section>
                  </div>
                  <h2>{items?.name}</h2>
                  <h4>{items?.subtitle}</h4>
                </div>
                <div className='specifications'>
                  <div className='mobile-title'>
                    <span className='line-h'></span>
                    <span>SPECIFICATIONS</span>
                    <span className='line-h'></span>
                  </div>
                  <div className='u9ckl-flex'>
                    <div className='circle-lines'>
                      <div
                        ref={ref}
                        className={
                          inView
                            ? "fade-in-obsrvr verticle-line"
                            : "verticle-line fade-in-obsrvr-init"
                        }
                      >
                        <span className='kc9-at-top top'></span>
                        <section>
                          {items["fingerprint"] != undefined && (
                            <>
                              {items["fingerprint"] ? (
                                <FaCheck className='check' />
                              ) : (
                                <FaTimes className='no-check' />
                              )}
                              <span>Finger Print Reader</span>
                            </>
                          )}
                        </section>
                        <section>
                          {items["security_lock_slot"] != undefined && (
                            <>
                              {items["security_lock_slot"] ? (
                                <FaCheck className='check' />
                              ) : (
                                <FaTimes className='no-check' />
                              )}
                              <span>Security Lock Slot</span>
                            </>
                          )}
                        </section>
                        <section>
                          {items["backlit_keyboard"] != undefined && (
                            <>
                              {items["backlit_keyboard"] ? (
                                <FaCheck className='check' />
                              ) : (
                                <FaTimes className='no-check' />
                              )}
                              <span>Security Lock Slot</span>
                            </>
                          )}
                        </section>
                        <section>
                          {items["optical_drive"] != undefined && (
                            <>
                              {items["optical_drive"] ? (
                                <FaCheck className='check' />
                              ) : (
                                <FaTimes className='no-check' />
                              )}
                              <span>Security Lock Slot</span>
                            </>
                          )}
                        </section>
                        <section>
                          {items["speakers"] != undefined && (
                            <>
                              {items["speakers"] ? (
                                <FaCheck className='check' />
                              ) : (
                                <FaTimes className='no-check' />
                              )}
                              <span>Speakers</span>
                            </>
                          )}
                        </section>
                        <section>
                          {items["microphone"] != undefined && (
                            <>
                              {items["microphone"] ? (
                                <FaCheck className='check' />
                              ) : (
                                <FaTimes className='no-check' />
                              )}
                              <span>Microphone</span>
                            </>
                          )}
                        </section>
                        <span className='kc9-at-top bottom'></span>
                      </div>
                    </div>
                    <div className='uaweluef'>
                      {items["cpu"] && (
                        <RenderLaptopSpecs
                          name='Processor'
                          value={items["cpu"]}
                        />
                      )}
                      {items["gpu"] && (
                        <RenderLaptopSpecs name='GPU' value={items["gpu"]} />
                      )}
                      {items["ram"] && (
                        <RenderLaptopSpecs name='Ram' value={items["ram"]} />
                      )}
                      {items["storage"] && (
                        <RenderLaptopSpecs
                          name='Storage'
                          value={items["storage"]}
                        />
                      )}
                      {items["display"] && (
                        <RenderLaptopSpecs
                          name='Display'
                          value={items["display"]}
                        />
                      )}
                      {items["weight"] && (
                        <RenderLaptopSpecs
                          name='Weight'
                          value={items["weight"]}
                        />
                      )}
                      {items["os"] && (
                        <RenderLaptopSpecs name='OS' value={items["os"]} />
                      )}
                      {items["audio_jack"] && (
                        <RenderLaptopSpecs
                          name='Audio Jack'
                          value={items["audio_jack"]}
                        />
                      )}
                      {items["usbs"] && (
                        <RenderLaptopSpecs
                          name='USB Ports'
                          value={items["usbs"]}
                          isArray={true}
                        />
                      )}

                      {items["bluetooth"] && (
                        <RenderLaptopSpecs
                          name='Bluetooth'
                          value={`Bluethooth ${items["bluetooth"]}`}
                        />
                      )}
                      {items["card_reader"] && (
                        <RenderLaptopSpecs
                          name='Card Reader'
                          value={items["card_reader"]}
                        />
                      )}

                      {items["dimensions"] && (
                        <RenderLaptopSpecs
                          name='Dimensions'
                          value={items["dimensions"]}
                        />
                      )}
                      {items["web_camera"] && (
                        <RenderLaptopSpecs
                          name='Web Camera'
                          value={`${items["web_camera"]} Camera`}
                        />
                      )}
                    </div>
                  </div>
                  <section className='spec-desc'>
                    <h2>About {items?.name}</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa voluptates beatae alias. Facere excepturi odit magnam
                      consectetur aliquid accusantium est beatae quidem! Vel
                      praesentium aperiam tempora iste incidunt, recusandae rem!
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa voluptates beatae alias. Facere excepturi odit magnam
                      consectetur aliquid accusantium est beatae quidem! Vel
                      praesentium aperiam tempora iste incidunt, recusandae rem!
                    </p>
                  </section>
                  <svg
                    className='klciwemx'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1281.12'
                    height='453.813'
                    viewBox='0 0 1281.12 453.813'
                  >
                    <path
                      id='pricing-layer'
                      d='M1675,3521.748H393.88v453.813s52.493-155.146,208.525-174.333c104.7-12.875,345.537,0,345.537,0h440s52.135-1.234,95.8-9.463c42.238-7.961,75.575-22.655,112.058-44.116,73.852-43.443,79.208-137.568,79.208-137.568Z'
                      transform='translate(-393.88 -3521.748)'
                    />
                  </svg>
                </div>
                <div className='mobile-pricing a8j3c'>
                  <div className='mobile-title'>
                    <span className='line-h'></span>
                    <span className='a92yt29b'>CHECK IT NOW</span>
                    <span className='line-h'></span>
                  </div>
                  <div className='pricing-cksax'>
                    {EcomStore.map((store: any, i: number) => {
                      return (
                        <PPricingRender
                          item={store}
                          key={i}
                          index={i}
                          phone={items?.name}
                        />
                      );
                    })}
                  </div>
                  {
                    <Reviews
                      reviews={{}}
                      post_slug={items.slug}
                      name={items?.name}
                      setMessage={(m: any) => setMessage(m)}
                    />
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context: any) {
  const slug: any = context.params.laptop;
  const laptop = JSON.parse(await getLaptop(slug));
  if (laptop === undefined || laptop.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      laptop,
    },
  };
}
