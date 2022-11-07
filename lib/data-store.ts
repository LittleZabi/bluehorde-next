import { categoriesModal, smartModal, laptopsModal } from "./modals";
import db from "../utils/db";
import { itemPerPage } from "../utils/config";

export async function getCategories(type: string) {
  await db.connect();
  const data: any = await categoriesModal.find({ type: type }, { _id: 0 });
  return JSON.stringify(data);
}
export const getLaptopCatItems = async (slug: string, page: any) => {
  await db.connect();
  page = parseInt(page);
  page = page === 1 ? 0 : page;
  const item: object = await laptopsModal
    .find({ category: slug }, {})
    .skip(page * itemPerPage)
    .limit(itemPerPage);
  return JSON.stringify(item);
};

export const getCatItem = async (slug: string) => {
  await db.connect();
  const item: object = await smartModal.find(
    { category: slug },
    { _id: 0, image: 1, name: 1, slug: 1 }
  );
  return JSON.stringify(item);
};
export const getPhone = async (slug: any) => {
  await db.connect();
  const item: object = await smartModal.find({ slug: slug });
  return JSON.stringify(item);
};
