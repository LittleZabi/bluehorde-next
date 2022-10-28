import { FaFire, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

export default function Reviews({ reviews }) {
  return (
    <div className='reviews-8293'>
      <div className='mobile-title'>
        <span className='line-h'></span>
        <span className='a92yt29b'>People Reviews</span>
        <span className='line-h'></span>
      </div>
      <div className='rev-2832'>
        <section>
          <div className='profile'>
            <div className='pro-987'>LZ</div>
          </div>
          <div>
            <div className='a92wqi'>
              <p>LittleZabi</p>
              <div className='s-end83'>
                <span className='a-23'>
                  one year ago from UK <FaMapMarkerAlt /> likes 388 <FaHeart />
                </span>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                voluptatibus. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae, voluptatibus. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Vitae, voluptatibus. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                voluptatibus. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae, voluptatibus. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Vitae, voluptatibus. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
                voluptatibus. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vitae, voluptatibus.
              </div>
            </div>
          </div>
        </section>
        <section className='no-trail'>
          <div className='profile'>
            <div className='pro-987'>
              <FaFire />
            </div>
          </div>
          <div>
            <div className='a92wqi'>
              <div>Add your review</div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              voluptatibus.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
