import { categoriesModal, smartModal } from "../models/categories-modal"
import db from "../utils/db"

export async function getCategories(){
    await db.connect()
    const data:any = await categoriesModal.find({}, {_id: 0})
    return JSON.stringify(data)
}

export const getCatItem = async(slug:string) => {
    await db.connect()
    const item:object = await smartModal.find({category: slug}, {_id: 0, image: 1, name: 1, slug: 1})
    return JSON.stringify(item)
}
export const getPhone = async (slug:any) => {
    await db.connect()
    const item:object = await smartModal.find({slug: slug})
    return JSON.stringify(item)
}