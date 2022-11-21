import Link from "next/link";
import {
  FaSearch,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortAmountUp,
  FaSortUp,
} from "react-icons/fa";
import Search from "./search-component";
export default function FilterCompo({ categories, setCateItems, parentName }) {
  const resetCatItems = () => {
    setCateItems(null);
  };
  const sortBy = (by: string) => {
    if (by === "a-z") {
      const sort_ = categories.sort(function (a: any, b: any) {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });
      setCateItems(sort_);
    }
    if (by === "z-a") {
      const sort_ = categories.sort(function (a: any, b: any) {
        if (a.category < b.category) return 1;
        if (a.category > b.category) return -1;
        return 0;
      });
      setCateItems(sort_);
    }
  };
  const handleSearch = (e: any) => {
    const value = e.target.value;
    if (value.length > 0) {
      const items = categories.filter(
        (e: any) => e.category.indexOf(value) > -1
      );
      setCateItems(items);
    } else {
      resetCatItems();
    }
  };
  return (
    <div className='page-size filter-sec'>
      <div>
        <h5>Search in {parentName}</h5>
      </div>
      <div>
        <Search className={"phones-uw3kxz"} />
      </div>
      <div className='filter-button'>
        <Link href=''>
          <picture title='sort by a to z'>
            <img src='/media/assets/a-z.svg' alt='a-to-z' />
          </picture>
        </Link>
        <Link href='' title='sort by z to a'>
          <picture title='sort by z to a'>
            <img src='/media/assets/z-a.svg' alt='a-to-z' />
          </picture>
        </Link>
      </div>
    </div>
  );
}
