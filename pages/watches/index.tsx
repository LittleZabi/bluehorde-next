import { getCategories } from "../../lib/data-store";
import ProductCategRender from "../../components/phone-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
import Message from "../../components/message";
export default function Phones(props: any) {
  const [message, setMessage] = useState<any>(false);
  return (
    <Layout title={"Phones Categories"}>
      {message && (
        <Message
          message={message.message}
          handleClose={() => setMessage(false)}
          variant={message.variant}
        />
      )}
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
            {props.categories.map((item: any, i: number) => (
              <ProductCategRender
                key={i}
                asRender='watches/category'
                item={item}
              />
            ))}
          </div>
          <RightSide setMessage={(m: any) => setMessage(m)} />
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context: any) {
  let categories = JSON.parse(await getCategories("watches"));
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
