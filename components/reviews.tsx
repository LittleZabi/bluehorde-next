import { FaFire, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import blueRex from "../utils/blueRex.js";
import moment from "moment";
import { setUserCharName } from "../utils/common";
export default function Reviews({ reviews, name, post_slug, setMessage }) {
  const [comments, setComments] = useState<[]>([]);
  const getComments = useCallback(async () => {
    await blueRex
      .get(`/api/get-comments/?post_slug=${post_slug}`)
      .then((e) => setComments(JSON.parse(e)))
      .catch((e) => console.error(e));
  }, [post_slug]);
  async function handleMessage(e: any) {
    e.preventDefault();
    const username = e.target["username"].value;
    const message = e.target["message"].value;
    if (username.lenght < 3) {
      setMessage({
        message: "username must be greater than 5 char",
        variant: "alert",
      });
      return 0;
    }
    if (message.lenght < 2) {
      setMessage({ message: "Enter minimum 3 characters!", variant: "alert" });
      return 0;
    }
    blueRex
      .post("/api/set-comment/", {
        username,
        message,
        post_slug,
      })
      .then((e) => {
        console.log(JSON.parse(e));
        let y: any = [JSON.parse(e), ...comments];
        console.log("res: ", y);
        setComments(y);
      })
      .catch((e) => {
        if (blueRex.status === 422) {
          setMessage({ message: e, variant: "alert" });
        } else {
          console.error(e);
        }
      });
  }

  useEffect(() => {
    getComments();
  }, [getComments]);
  return (
    <div className='reviews-8293'>
      <div className='mobile-title'>
        <span className='line-h'></span>
        <span className='a92yt29b'>People Reviews</span>
        <span className='line-h'></span>
      </div>
      <div className='rev-2832'>
        <section style={{ width: "max-content" }}>
          <div className='profile'>
            <div className='pro-987'>
              <FaFire />
            </div>
          </div>
          <div>
            <div className='a92wqi'>
              <p>Add your comment</p>
              <div className='add-review'>
                <span className='alert-box cmnt-note'>
                  text that include any abuse or voilating any rules and
                  regulations will be remove and one who does that {"can't"}{" "}
                  write comments again for a month or more.
                </span>
                <form className='review-form' onSubmit={handleMessage}>
                  <input
                    type='text'
                    placeholder='Enter your name...'
                    name='username'
                    required
                  />
                  <textarea
                    placeholder='Enter your message here...'
                    name='message'
                    required
                  ></textarea>
                  <button type='submit'>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {comments &&
          comments.map((comment: any, i: number) => {
            return (
              <section key={i}>
                <div className='profile'>
                  <div className='pro-987'>
                    {comment.image
                      ? comment.image
                      : setUserCharName(comment.username)}
                  </div>
                </div>
                <div>
                  <div className='a92wqi'>
                    <p>{comment.username}</p>
                    <div className='s-end83'>
                      <span className='a-23'>
                        {moment(comment.createdAt).fromNow()} from{" "}
                        {comment.location?.name} <FaMapMarkerAlt />
                      </span>
                    </div>
                    <div>{comment.comment}</div>
                  </div>
                </div>
              </section>
            );
          })}

        <section className='no-trail'>
          <div className='profile'>
            <div className='pro-987'>
              <FaFire />
            </div>
          </div>
          <div>
            <div className='a92wqi'>
              <h5>
                see more companion about <b>{name}</b>
              </h5>
              <div className='review-form'>
                <button>Load More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
