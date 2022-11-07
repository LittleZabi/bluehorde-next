import { getCategories } from "../../lib/data-store";
import { GetStaticProps } from "next";
import ProductCategRender from "../../components/phone-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
import CatTopView from "../../components/cat-page-top";
export const getStaticProps: GetStaticProps = async (context) => {
  const categories = JSON.parse(await getCategories("phone"));
  return {
    props: {
      categories,
    },
  };
};
export default function phones(props: any) {
  const [catItems, setCateItems] = useState<any>();
  return (
    <Layout title={"Show Room "}>
      <div className='products fade-in'>
        <CatTopView title='Mobile' />
        <FilterCompo
          parentName={"phone categories"}
          categories={props.categories}
          setCateItems={setCateItems}
        />
        <div className='page-size items categ-flex'>
          <div className='container'>
            {catItems && catItems.length > 0
              ? catItems.map((item: any, i: number) => (
                  <ProductCategRender
                    key={i}
                    asRender='phones/category'
                    item={item}
                  />
                ))
              : props.categories.map((item: any, i: number) => (
                  <ProductCategRender
                    key={i}
                    asRender='phones/category'
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
