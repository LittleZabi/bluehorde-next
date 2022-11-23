import Link from "next/link";
import Search from "./search-component";
export default function FilterCompo({ parentName }) {
  return (
    <div className='page-size filter-sec'>
      <div>
        <h5>Search in {parentName}</h5>
      </div>
      <div>
        <Search className={"phones-uw3kxz"} />
      </div>
      <div className='filter-button'>
        <Link href='?sort=a-z'>
          <picture title='sort by a to z'>
            <img src='/media/assets/a-z.svg' alt='a-to-z' />
          </picture>
        </Link>
        <Link href='?sort=z-a'>
          <picture title='sort by z to a'>
            <img src='/media/assets/z-a.svg' alt='a-to-z' />
          </picture>
        </Link>
        <Link href='?sort=max-cat-items'>
          <picture title='sort by max category items'>
            <img src='/media/assets/sort-amount-d.svg' alt='sort items' />
          </picture>
        </Link>
        <Link href='?sort=low-cat-items'>
          <picture title='sort by low category items'>
            <img src='/media/assets/sort-amount-l.svg' alt='sort items' />
          </picture>
        </Link>
      </div>
    </div>
  );
}
