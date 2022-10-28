import { useInView } from "react-intersection-observer";
export default function PPricingRender({ item, phone, index }) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "-0px 0px -100px 0px",
  });
  return (
    <section
      ref={ref}
      className={inView ? "slide-in-obsrvr" : "slide-in-obsrvr-init"}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className='title'>{item.name}</span>
      {item?.locations?.map((e: any, k: number) => {
        return (
          <a target={"_blank"} rel='noreferrer' href={e.search + phone} key={k}>
            <div>
              {e.code ? (
                <span className='loc-a83owop'>{e.code}</span>
              ) : (
                <span className='loc-382llc'>
                  <p>&#x1F310;</p>
                </span>
              )}
              <img src={item.logo} alt='' />
            </div>
          </a>
        );
      })}
    </section>
  );
}
