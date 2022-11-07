import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { fadeIn } from "../utils/intersection-options";
const CatItemRender = ({ data, renderAs }: any) => {
  const { ref, inView, entry } = useInView(fadeIn);
  return (
    <Link href={`/${renderAs}/${data.slug}`}>
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
          <img src={data.image} />
          <span className='name'>{data.name}</span>
        </div>
      </section>
    </Link>
  );
};
export default CatItemRender;
