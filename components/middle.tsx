import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Search from "./search-component";
function MiddleView() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  return (
    <div className='middle-view'>
      <div className='middle-bg '>
        <div className='page-size'>
          <Image
            src='/media/images/home-bg.png'
            placeholder={"blur"}
            alt='Picture of the author'
            blurDataURL='/media/images/home-bg-low.png'
            width={680}
            height={467}
          />
        </div>
        {/* <picture>
          <img  />
        </picture> */}
      </div>
      <svg
        className='svg-circles'
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
      <section className='ap9xs  page-size'>
        <div>
          <h1
            ref={ref}
            className={inView ? "from-right fr1" : "from-right-init"}
          >
            Find Best...!
          </h1>
          <h4
            ref={ref}
            className={inView ? "from-right fr2" : "from-right-init"}
          >
            Search your device specs!
          </h4>
          <h4
            ref={ref}
            className={inView ? "from-right fr4" : "from-right-init"}
          >
            and get best Smart Device
          </h4>
          <h4
            ref={ref}
            className={inView ? "from-right fr1" : "from-right-init"}
          >
            chill our services
          </h4>
          <h4
            ref={ref}
            className={inView ? "from-right fr5" : "from-right-init"}
          >
            All is transparent
          </h4>
          <button
            ref={ref}
            className={inView ? "from-right fr5" : "from-right-init"}
          >
            Get News
          </button>
          <button
            ref={ref}
            className={
              inView
                ? "from-right fr3 reverse-3kxa"
                : "from-right-init reverse-3kxa"
            }
          >
            Say Hi!
          </button>
        </div>
      </section>
      <Search />
    </div>
  );
}
export default MiddleView;
