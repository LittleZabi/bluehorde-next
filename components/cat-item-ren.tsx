import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { fadeIn } from "../utils/intersection-options";
const CatItemRender = ({ data, renderAs }: any) => {
  const { ref, inView, entry } = useInView(fadeIn);
  return (
    <Link href={`/${renderAs}/${data.slug}`}>
      <a>
        <section
          ref={ref}
          className={
            inView
              ? "hide fade-in-obsrvr laptops"
              : "hide fade-in-obsrvr-init laptops"
          }
        >
          {data?.ram && <span className='ram-spec'>{data.ram}</span>}
          <div>
            <picture>
              <img src={data.image} alt={data.name} />
            </picture>
            <span className='name'>{data.name}</span>
          </div>
        </section>
      </a>
    </Link>
  );
};
export default CatItemRender;
