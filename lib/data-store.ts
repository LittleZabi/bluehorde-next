import {
  categoriesModal,
  smartModal,
  laptopsModal,
  watchesModal,
  Users,
} from "./modals";
import db from "../utils/db";
import { itemPerPage } from "../utils/config";
import { randomChar } from "../utils/common";
import { generateToken } from "./user-tokens";

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

export const getWatchesCatItem = async (slug: string, page: any) => {
  page = Number(page);
  await db.connect();
  const skipping = page === 1 ? 0 : (page - 1) * itemPerPage;
  const item: object = await watchesModal
    .find({ category: slug }, { _id: 0, image: 1, name: 1, slug: 1 })
    .skip(skipping)
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
export const getWatch = async (slug: any) => {
  await db.connect();
  const item: object = await watchesModal.find(
    { slug: slug },
    {
      _id: 0,
      category: 0,
      createdAt: 0,
      original: 0,
      cat_id: 0,
      from: 0,
      img_uploaded: 0,
    }
  );
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
      from: 0,
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
export const solveForgotPassword = async (code: any) => {
  await db.connect();
  const user: any = await Users.findOne(
    { code: code },
    { _id: 1, username: 1, fullname: 1, email: 1, country: 1 }
  );
  if (user) {
    return {
      status: 1,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      _id: user._id,
      country: user.country,
      token: generateToken(user),
    };
  } else {
    return { status: 0 };
  }
};
export const solveUserAuth = async (code: any) => {
  await db.connect();
  const user: any = await Users.findOne(
    { code: code },
    { _id: 1, username: 1, fullname: 1, email: 1, country: 1 }
  );
  if (user) {
    await Users.update({ _id: user._id }, { active: 1, code: randomChar(25) });
    return JSON.stringify({
      status: 1,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      _id: user._id,
      country: user.country,
      token: generateToken(user),
    });
  } else {
    return JSON.stringify({ status: 0 });
  }
};
