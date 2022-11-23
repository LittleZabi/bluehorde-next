import Layout from "../../components/Layout";
import { DisplaySizes } from "../../utils/common";
import PPricingRender from "../../components/render-phone-pricing";
import RenderSpecs from "../../components/phone-specs-render";
import { FaFire, FaHeart, FaThumbsDown } from "react-icons/fa";
import { EcomStore } from "../../utils/ecom-store-list";
import Reviews from "../../components/reviews";
import { useInView } from "react-intersection-observer";
import { getPhone } from "../../lib/data-store";
export default function MobileView(props: any) {
  const items = props.phone && props.phone[0];
  const middleViews = (c: string) => {
    if (c === "camera") {
      let y = items?.short_detail["main-camera"];
      if (!y || y === "") {
        console.log(y);
        y = items?.mobile_specs?.filter(
          (e: any) => e.name.toLowerCase() === "network"
        );
        return y.length > 0 ? y[0].Technology + " Technology | " : "";
      }
      let u = y.split("mp")[0] + "MP main camera | ";
      return u;
    } else if (c === "display") {
      let y = items?.mobile_specs?.filter(
        (e: any) => e.name.toLowerCase() === "display"
      );
      if (y.length > 0) return DisplaySizes(y[0].Resolution);
      else {
        return items?.brief_scrap["displayPixles"] + " display";
      }
    } else if (c === "processor") {
      let y = items?.brief_scrap["Chipset"];
      y += y === "" ? "" : " fast processor";
      if (!y || y === "") {
        let k = items?.brief_scrap["battery"] + " ";
        k += items?.brief_scrap["batteryType"]
          ? items?.brief_scrap["batteryType"] + " powerfull battery"
          : " powerfull battery";
        return k;
      } else {
        return y;
      }
    }
  };
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "-0px 0px -100px 0px",
  });
  return (
    <Layout title={items?.name}>
      <div className='mobile-view fade-in'>
        <div className='page-size mobile-top-view'>
          <picture>
            <img
              src='/media/assets/top-bg-layer.svg'
              alt='Top Bg Layer'
              title=' '
            />
            <img src='/media/assets/top-bottom-layer.svg' alt='' title=' ' />
          </picture>
        </div>
        <div className='page-size mobile-top-taxc-view'>
          <div>
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
          </div>
          <div className='a3i302kc'>
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
              {items?.short_detail.subtitle}
            </h3>
            {items && (
              <>
                <h5
                  ref={ref}
                  className={inView ? "from-right fr2" : "from-right-init"}
                >
                  {middleViews("camera")} {middleViews("display")}
                </h5>
                <h5
                  ref={ref}
                  className={inView ? "from-right fr4" : "from-right-init"}
                >
                  {middleViews("processor")}
                </h5>
              </>
            )}
          </div>
          <div className='a83xowx'>
            <h4>
              Popularity <small>Live Updating</small>
            </h4>
            <span>
              <FaFire />
              {items?.brief_scrap?.hits} <small>Views</small>
            </span>
            <span>
              <FaHeart />
              {items?.brief_scrap?.fans} <small>Loves</small>
            </span>
            <button className='a93lx0e' onClick={() => alert("add a heart!")}>
              Give a heart! <FaThumbsDown />
            </button>
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
                      title='Phone Release date'
                    />
                  </picture>
                  <p>Release date</p>
                  <span>
                    {items?.short_detail["release"] ??
                      new Date().toDateString()}
                  </span>
                </section>
                <span className='line-v'></span>
                <section>
                  <picture>
                    <img
                      src='/media/assets/phone.png'
                      alt='phone body'
                      title='phone body information'
                    />
                  </picture>
                  <p>Phone Body</p>
                  <span>
                    {items?.brief_scrap["thickness"] ?? "195g, 8.8mm thickness"}
                  </span>
                </section>
                <span className='line-v'></span>
                <section>
                  <picture>
                    <img src='/media/assets/terminal.png' alt='' />
                  </picture>
                  <p>System Information</p>
                  <span>
                    {items?.short_detail["plateform"]?.os ??
                      items?.brief_scrap["os"] ??
                      "Modernized os, "}
                    {" flexible pure UI"}
                  </span>
                </section>
                <span className='line-v'></span>
                <section>
                  <picture>
                    <img
                      src='/media/assets/chip.png'
                      alt='mobile chip'
                      title='mobile chip info'
                    />
                  </picture>
                  <p>Phone Memory</p>
                  <span>
                    {items?.brief_scrap["Memory"] ??
                      items?.mobile_specs.filter(
                        (e: any) => e.name.toLowerCase() === "memory"
                      )[0]?.Internal ??
                      " Enough Storage/Memory"}
                  </span>
                </section>
              </div>
              <h2>{items?.name}</h2>
              <h4>{items?.short_detail?.subtitle}</h4>
            </div>
            <div className='specifications'>
              <div className='spec-left'></div>
              <div className='spect-right'></div>
              <div className='mobile-title'>
                <span className='line-h'></span>
                <span>SPECIFICATIONS</span>
                <span className='line-h'></span>
              </div>
              <div className='uaweluef'>
                {items &&
                  items.mobile_specs?.map((item: any, i: number) => {
                    return <RenderSpecs key={i} item={item} />;
                  })}
              </div>
              <section className='spec-desc'>
                <h2>About {items?.name}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  voluptates beatae alias. Facere excepturi odit magnam
                  consectetur aliquid accusantium est beatae quidem! Vel
                  praesentium aperiam tempora iste incidunt, recusandae rem!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  voluptates beatae alias. Facere excepturi odit magnam
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
              {<Reviews reviews={{}} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const slug: any = context.params.phone;
  const phone = JSON.parse(await getPhone(slug));
  return {
    props: {
      phone,
    },
  };
}
