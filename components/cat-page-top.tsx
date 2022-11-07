import { useInView } from "react-intersection-observer";
import { fromRight } from "../utils/intersection-options";
export default function CatTopView({ title }) {
  const { ref, inView, entry } = useInView(fromRight);
  return (
    <div className='top-view'>
      <picture>
        <img
          src='/media/assets/categ-view-top-layer.svg'
          alt='top view image layer'
        />
        <img src='/media/assets/ellipses.svg' alt='top view image layer' />
      </picture>
      <div className='xilcdk3e-ls5x'>
        <section>
          <h3
            ref={ref}
            className={inView ? "from-right fr1" : "from-right-init"}
          >
            Be Cool
          </h3>
          <h2
            ref={ref}
            className={inView ? "from-right fr2" : "from-right-init"}
          >
            Pick Your
          </h2>
          <h1
            ref={ref}
            className={inView ? "from-right fr3" : "from-right-init"}
          >
            Brand {title}
          </h1>
          <h2
            ref={ref}
            className={inView ? "from-right fr4" : "from-right-init"}
          >
            Now
          </h2>
          <h5
            ref={ref}
            className={inView ? "from-right fr5" : "from-right-init"}
          >
            This website have a lot of collections of mobiles devices, laptop
            brands, smart watchs and other components.
            {" it's "} easy to search or filter your device in the collections.
            use our filter and search features and enjoy surfing.
          </h5>
          <a
            ref={ref}
            className={inView ? "from-right fr4" : "from-right-init"}
            href='#'
            title=''
          >
            Latest Devices
          </a>
        </section>
      </div>
    </div>
  );
}
