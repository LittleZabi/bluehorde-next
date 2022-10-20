import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import CatItemRender from "../../components/cat-item-ren";
import Layout from "../../components/Layout";
import { getCatItem } from "../../modules/categories-mod";
export const getStaticProps: GetStaticProps = async (context) => {
  const slug: any = context.params.view;
  const category = JSON.parse(await getCatItem(slug));
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
export default function View(props) {
  console.log("props: ", props);
  return (
    <Layout
      title={props ? (props.slug + " Devices ").toUpperCase() : undefined}
    >
      <div className='cat-view'>
        <div className='page-size container'>
          <h2 className='title'>{props.slug} SMART DEVICES</h2>
          <div>
            <div className='breadcrumb'>
              <Link href='/'>
                <a>
                  Home
                  <FaChevronRight />
                </a>
              </Link>
              <Link href='/categories'>
                <a>
                  Categories
                  <FaChevronRight />
                </a>
              </Link>
              {props.slug}
            </div>
          </div>
          <div className='product-list'>
            {props.category?.map((e: any, i: number) => {
              return <CatItemRender key={i} data={e} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}