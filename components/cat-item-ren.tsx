import Link from "next/link";

import { useInView } from "react-intersection-observer";
import { fadeIn } from "../utils/intersection-options";
const CatItemRender = ({ data }: any) => {
  const { ref, inView, entry } = useInView(fadeIn);
  return (
    <Link href={`/phone/${data.slug}`}>
      <section
        ref={ref}
        className={inView ? "hide fade-in-obsrvr" : "hide fade-in-obsrvr-init"}
      >
        <div>
          <img src={data.image} />
          <span className='name'>{data.name}</span>
        </div>
      </section>
    </Link>
  );
};
export default CatItemRender;
