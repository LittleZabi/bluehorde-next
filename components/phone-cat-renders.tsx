import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { fadeIn } from "../utils/intersection-options";

const ProductCategRender = ({ item, asRender }: any) => {
  const { ref, inView, entry } = useInView(fadeIn);
  return (
    <Link href={`/${asRender}/${item.category}`}>
      <a>
        <section
          ref={ref}
          className={inView ? "fade-in-obsrvr" : "fade-in-obsrvr-init"}
        >
          <div className='from-left'>
            <span className='badge badge-success badge-round'>
              New Arrivals
            </span>
          </div>
          <div className='center'>
            <picture>
              <img
                src={`/media/logos/${item.category}.png`}
                alt={item.category}
              />
            </picture>
          </div>
          <div className='center'>
            <h3>{item.items}+ Modals</h3>
            <h2>{item.category}</h2>
            <h4>click to see products</h4>
          </div>
        </section>
      </a>
    </Link>
  );
};

export default ProductCategRender;
