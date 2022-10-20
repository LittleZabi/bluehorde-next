import Link from "next/link";

const CatItemRender = ({ data }: any) => {
  return (
    <Link href={`/mobile/${data.slug}`}>
      <section>
        <div>
          <img src={data.image} />
          <span className='name'>{data.name}</span>
        </div>
      </section>
    </Link>
  );
};
export default CatItemRender;
