import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
const RenderLaptopSpecs = ({ name, value, isArray = false }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "-0px 0px -100px 0px",
  });
  return (
    <section
      ref={ref}
      className={inView ? "fade-in-obsrvr" : "fade-in-obsrvr-init"}
    >
      <div>
        <span className='title'>{name}</span>
      </div>
      {isArray && (
        <div className='ckek3lxhwed'>
          {value.map((e: any, i: number) => {
            let key = e[0];
            let value_ = e[1];
            return (
              <div key={i}>
                <span className='mobile-sub'>{key}</span>
                <span className='mobile-text'>{value_}</span>
                <span className='line-h'></span>
              </div>
            );
          })}
        </div>
      )}
      {!isArray && (
        <div className='ckek3lxhwed'>
          {value === true ? (
            <FaCheckCircle />
          ) : value === false ? (
            <FaTimesCircle />
          ) : (
            <span className='mobile-sub'>{value}</span>
          )}

          <span className='line-h'></span>
        </div>
      )}
    </section>
  );
};
export default RenderLaptopSpecs;
