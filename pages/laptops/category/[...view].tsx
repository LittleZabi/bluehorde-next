import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import CatItemRender from "../../../components/cat-item-ren";
import Layout from "../../../components/Layout";
import { getLaptopCatItems } from "../../../lib/data-store";
import { laptopCatItemsCount } from "../../../utils/data-counter";
export const getStaticProps: GetStaticProps = async (context) => {
  const slug: any = context.params.view[0];
  let page: number | string = 0;
  page = context.params.view[1] ?? 0;
  const category = JSON.parse(await getLaptopCatItems(slug, page));
  const total_pages = laptopCatItemsCount();
  console.log("total data: ", total_pages);
  return {
    props: {
      category,
      slug,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default function View(props: any) {
  return (
    <Layout
      title={props ? (props.slug + " Devices ").toUpperCase() : undefined}
    >
      <div className='cat-view fade-in'>
        <div className='page-size container'>
          <h2 className='title'>
            <picture>
              <img src={`/media/logos/${props.slug}.png`} alt={props.slug} />
            </picture>{" "}
            Brand Laptop
          </h2>
          <div>
            <div className='breadcrumb'>
              <Link href='/'>
                <a>
                  Home
                  <FaChevronRight />
                </a>
              </Link>
              <Link href='/laptops'>
                <a>
                  laptops
                  <FaChevronRight />
                </a>
              </Link>
              {props.slug}
            </div>
          </div>
          <div className='product-list'>
            {props.category?.map((e: any, i: number) => {
              return <CatItemRender key={i} data={e} renderAs='laptops' />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
