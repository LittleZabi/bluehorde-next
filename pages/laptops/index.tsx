import { getCategories } from "../../lib/data-store";
import { GetStaticProps } from "next";
import ProductCategRender from "../../components/laptop-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
import CatTopView from "../../components/cat-page-top";
import Search from "../../components/search-component";
export default function Laptops(props: any) {
  const [catItems, setCateItems] = useState<any>();
  return (
    <Layout title={"Show Room "}>
      <div className='products fade-in'>
        <CatTopView title='Laptops' />
        <Search className={"phones-uw3kxz"} />
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
export async function getServerSideProps(context: any) {
  const categories = JSON.parse(await getCategories("laptops"));
  return {
    props: {
      categories,
    },
  };
}
