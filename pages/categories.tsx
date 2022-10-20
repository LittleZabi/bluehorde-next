import Layout from "../components/Layout";
import { useEffect } from "react";
import { getCategories } from "../modules/categories-mod";
import { GetStaticProps } from "next";
import ProductCategRender from "../components/category-render";

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = JSON.parse(await getCategories());
  return {
    props: {
      categories,
    },
  };
};

export default function categories(props) {
  return (
    <Layout title={"categories "}>
      <div className='products'>
        <div className='top-view'>
          <img src='/media/assets/categ-view-top-layer.svg' alt='' />
          <img src='/media/assets/ellipses.svg' alt='' />
          <div className='xilcdk3e-ls5x'>
            <section>
              <h3>Be Cool</h3>
              <h2>Pick Your</h2>
              <h1>Brand</h1>
              <h2>Now</h2>
              <h5>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </h5>
              <a href='#' title=''>
                Latest Devices
              </a>
            </section>
            <section>
              <img src='/media/assets/catego.png' alt='' />
            </section>
          </div>
        </div>
        <div className='page-size items'>
          <div className='container'>
            {props.categories.map((item: any, i: number) => (
              // console.log(item)
              <ProductCategRender key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
