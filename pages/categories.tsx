import Layout from "../components/Layout";
import { getCategories } from "../modules/categories-mod";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import ProductCategRender from "../components/category-render";
import RightSide from "../components/right-side";
import { useInView } from "react-intersection-observer";
import { fromRight } from "../utils/intersection-options";
import { useState } from "react";
import FilterCompo from "../components/filter-compo";
export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  // const router = useRouter();

  // const { filter } = router.query;
  // console.log(filter);
  const categories = JSON.parse(await getCategories());
  return {
    props: {
      categories,
    },
  };
};
export default function categories(props: any) {
  const { ref, inView, entry } = useInView(fromRight);
  const [catItems, setCateItems] = useState<any>();
  return (
    <Layout title={"Show Room "}>
      <div className='products fade-in'>
        <div className='top-view'>
          <picture>
            <img
              src='/media/assets/categ-view-top-layer.svg'
              alt='top view image layer'
            />
            <img src='/media/assets/ellipses.svg' alt='top view image layer' />
          </picture>
          <div className='xilcdk3e-ls5x'>
            <section>
              <h3
                ref={ref}
                className={inView ? "from-right fr1" : "from-right-init"}
              >
                Be Cool
              </h3>
              <h2
                ref={ref}
                className={inView ? "from-right fr2" : "from-right-init"}
              >
                Pick Your
              </h2>
              <h1
                ref={ref}
                className={inView ? "from-right fr3" : "from-right-init"}
              >
                Brand
              </h1>
              <h2
                ref={ref}
                className={inView ? "from-right fr4" : "from-right-init"}
              >
                Now
              </h2>
              <h5
                ref={ref}
                className={inView ? "from-right fr5" : "from-right-init"}
              >
                This website have a lot of collections of mobiles devices,
                laptop brands, smart watchs and other components.
                {" it's "} easy to search or filter your device in the
                collections. use our filter and search features and enjoy
                surfing.
              </h5>
              <a
                ref={ref}
                className={inView ? "from-right fr4" : "from-right-init"}
                href='#'
                title=''
              >
                Latest Devices
              </a>
            </section>
            <section>
              <picture>
                <img src='/media/assets/catego.png' alt='category image' />
              </picture>
            </section>
          </div>
        </div>
        <FilterCompo
          categories={props.categories}
          setCateItems={setCateItems}
        />
        <div className='page-size items categ-flex'>
          <div className='container'>
            {catItems && catItems.length > 0
              ? catItems.map((item: any, i: number) => (
                  <ProductCategRender key={i} item={item} />
                ))
              : props.categories.map((item: any, i: number) => (
                  <ProductCategRender key={i} item={item} />
                ))}
          </div>
          <RightSide />
        </div>
      </div>
    </Layout>
  );
}
