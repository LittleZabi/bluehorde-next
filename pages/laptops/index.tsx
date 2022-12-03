import { getCategories } from "../../lib/data-store";
import ProductCategRender from "../../components/laptop-cat-renders";
import RightSide from "../../components/right-side";
import { useState } from "react";
import FilterCompo from "../../components/filter-compo";
import Layout from "../../components/Layout";
import Message from "../../components/message";
export default function Laptops(props: any) {
  const [message, setMessage] = useState<any>(false);
  return (
    <Layout title={"Laptops Categories "}>
      {message && (
        <Message
          handleClose={() => setMessage(false)}
          message={message.message}
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
        <FilterCompo parentName={"laptops categories"} />
        <div className='page-size items categ-flex'>
          <div className='container'>
            {props.categories.map((item: any, i: number) => (
              <ProductCategRender
                key={i}
                asRender='laptops/category'
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
  const categories = JSON.parse(await getCategories("laptops"));
  return {
    props: {
      categories,
    },
  };
}
