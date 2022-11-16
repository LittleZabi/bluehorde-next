import { GetStaticPaths, GetStaticProps } from "next";
import BreadCrumb from "../../../components/breadcrumb";
import CatItemRender from "../../../components/cat-item-ren";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/pagination";
import { getLaptopCatItems } from "../../../lib/data-store";

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
          <BreadCrumb
            page={props.page}
            slug={props.slug}
            renderFor={"laptops"}
          />
          <div className='product-list'>
            {props.categories?.map((e: any, i: number) => {
              return <CatItemRender key={i} data={e} renderAs='laptops' />;
            })}
          </div>
        </div>
        {props.slug && (
          <Pagination
            pageNo={Number(props.page)}
            renderFor={`/laptops/category/${props.slug}`}
            api_qstrings={`laptops=1&category=${props.slug}`}
          />
        )}
        <br />
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context: any) {
  const slug: any = context.params.view[0];
  let page: number | string = 1;
  page = context.params.view[1] ?? 1;
  const categories = JSON.parse(await getLaptopCatItems(slug, page));
  if (categories.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      categories,
      slug,
      page,
    },
  };
}
