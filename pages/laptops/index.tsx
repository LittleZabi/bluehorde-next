import { getCategories } from "../../lib/data-store";
import { GetStaticProps } from "next";
import ProductCategRender from "../../components/laptop-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
import CatTopView from "../../components/cat-page-top";
export const getStaticProps: GetStaticProps = async (context) => {
  const categories = JSON.parse(await getCategories("laptops"));
  return {
    props: {
      categories,
    },
  };
};
export default function laptops(props: any) {
  const [catItems, setCateItems] = useState<any>();
  return (
    <Layout title={"Show Room "}>
      <div className='products fade-in'>
        <CatTopView title='Laptops' />
        <FilterCompo
          parentName={"laptops categories"}
          categories={props.categories}
          setCateItems={setCateItems}
        />
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