import { getCategories } from "../../lib/data-store";
import ProductCategRender from "../../components/laptop-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
export default function Laptops(props: any) {
  const [catItems, setCateItems] = useState<any>();
  return (
    <Layout title={"Laptops Categories "}>
      <div className='products fade-in'>
        <div className='top-view'>
          <picture>
            <img
              src='/media/assets/categ-view-top-layer.svg'
              alt='top view image layer'
            />
          </picture>
        </div>
        <FilterCompo parentName={"laptops categories"} />
        <div className='page-size items categ-flex'>
          <div className='container'>
            {catItems && catItems.length > 0
              ? catItems.map((item: any, i: number) => (
                  <ProductCategRender
                    key={i}
                    asRender='laptops/category'
                    item={item}
                  />
                ))
              : props.categories.map((item: any, i: number) => (
                  <ProductCategRender
                    key={i}
                    asRender='laptops/category'
                    item={item}
                  />
                ))}
          </div>
          <RightSide />
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context: any) {
  const categories = JSON.parse(await getCategories("laptops"));
  return {
    props: {
      categories,
    },
  };
}
