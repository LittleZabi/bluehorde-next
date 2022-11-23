import { getCategories } from "../../lib/data-store";
import ProductCategRender from "../../components/phone-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
export default function Phones(props: any) {
  const [catItems] = useState<any>();
  return (
    <Layout title={"Phones Categories"}>
      <div className='products fade-in'>
        <div className='top-view'>
          <picture>
            <img
              src='/media/assets/categ-view-top-layer.svg'
              alt='top view image layer'
            />
          </picture>
        </div>
        <FilterCompo parentName={"phone categories"} />
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
export async function getServerSideProps(context: any) {
  let categories = JSON.parse(await getCategories("phone"));
  function sortBy(sort: string) {
    if (sort === "a-z")
      categories = categories.sort(function (a: any, b: any) {
        if (a.category > b.category) return 1;
        if (a.category < b.category) return -1;
        return 1;
      });
    else if (sort === "z-a")
      categories = categories.sort(function (a: any, b: any) {
        if (a.category < b.category) return 1;
        if (a.category > b.category) return -1;
        return 1;
      });
    else if (sort === "max-cat-items")
      categories = categories.sort(function (a: any, b: any) {
        if (a.items < b.items) return 1;
        if (a.items > b.items) return -1;
        return 1;
      });
    else if (sort === "low-cat-items")
      categories = categories.sort(function (a: any, b: any) {
        if (a.items > b.items) return 1;
        if (a.items < b.items) return -1;
        return 1;
      });
  }
  if (context.query?.sort) sortBy(context.query.sort);
  return {
    props: {
      categories,
    },
  };
}
