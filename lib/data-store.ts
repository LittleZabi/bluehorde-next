import { categoriesModal, smartModal, laptopsModal } from "./modals";
import db from "../utils/db";
import { itemPerPage } from "../utils/config";

export async function getCategories(type: string) {
  await db.connect();
  const data: any = await categoriesModal.find(
    { type: type },
    { _id: 0, type: 0, image: 0 }
  );
  return JSON.stringify(data);
}
export const getLaptopCatItems = async (slug: string, page: any) => {
  await db.connect();
  page = parseInt(page);
  page = page === 1 ? 0 : page;
  const item: object = await laptopsModal
    .find({ category: slug }, { name: 1, ram: 1, slug: 1, image: 1, _id: 0 })
    .skip(page * itemPerPage)
    .limit(itemPerPage);
  return JSON.stringify(item);
};

export const getCatItem = async (slug: string, page: any) => {
  page = Number(page);
  await db.connect();
  const skipping = page === 1 ? 0 : (page - 1) * itemPerPage;
  const item: object = await smartModal
    .find({ category: slug }, { _id: 0, image: 1, name: 1, slug: 1 })
    .skip(skipping)
    .limit(itemPerPage);
  return JSON.stringify(item);
};
export const getPhone = async (slug: any) => {
  await db.connect();
  const item: object = await smartModal.find(
    { slug: slug },
    {
      _id: 0,
      category: 0,
      createdAt: 0,
      original: 0,
      cat_id: 0,
      img_uploaded: 0,
    }
  );
  return JSON.stringify(item);
};
export const getLaptop = async (slug: any) => {
  await db.connect();
  const item: object = await laptopsModal.find({ slug: slug }, { _id: 0 });
  return JSON.stringify(item);
};
