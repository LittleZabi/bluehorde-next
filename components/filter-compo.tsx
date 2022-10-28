import { FaSortAlphaDown, FaSortAlphaUp, FaSortAmountUp } from "react-icons/fa";
export default function FilterCompo({ categories, setCateItems }) {
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
        <button onClick={() => sortBy("a-z")}>
          <FaSortAlphaDown />
        </button>
        <button onClick={() => sortBy("z-a")}>
          <FaSortAlphaUp />
        </button>
        <button>
          <FaSortAmountUp />
        </button>
      </div>
      <div>
        <input
          type='search'
          onChange={handleSearch}
          placeholder='Search here...'
        />
      </div>
    </div>
  );
}
