import { BsSearch } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
function MiddleView() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  return (
    <div className='middle'>
      <div>
        <picture>
          <img src='/media/images/jungle.jpg' alt='middle view image' />
        </picture>
        <div></div>
      </div>
      <section>
        <div className='page-size'>
          <h1
            ref={ref}
            className={inView ? "from-right fr1" : "from-right-init"}
          >
            Get your best
          </h1>
          <h3
            ref={ref}
            className={inView ? "from-right fr2" : "from-right-init"}
          >
            Lets Search the specs!
          </h3>
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
            className={inView ? "from-right fr4" : "from-right-init"}
          >
            Learn More
          </button>
        </div>
      </section>
      <div className='blue-ii1sx'>
        <div
          ref={ref}
          className={inView ? "from-right fr1" : "from-right-init"}
        >
          <input type='input' placeholder='Take easy to find! search here...' />
          <BsSearch />
        </div>
      </div>
    </div>
  );
}
export default MiddleView;
