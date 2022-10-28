import {
  FaAndroid,
  FaBroadcastTower,
  FaCalendarAlt,
  FaFeather,
  FaGlobeAmericas,
  FaMobileAlt,
} from "react-icons/fa";
import {
  BsBatteryCharging,
  BsCamera,
  BsCamera2,
  BsFullscreen,
  BsHdd,
  BsSpeaker,
  BsThreeDots,
  BsWifi,
} from "react-icons/bs";

import { useInView } from "react-intersection-observer";
import React from "react";

const RenderSpecs = ({ item }: any) => {
  const values: any = Object.values(item);
  const keys = Object.keys(item);
  const returnIcon = (type_: any) => {
    type_ = type_.toLowerCase();
    if (type_ === "body") return <FaMobileAlt />;
    if (type_ === "launch") return <FaCalendarAlt />;
    if (type_ === "network") return <FaBroadcastTower />;
    if (type_ === "display") return <BsFullscreen />;
    if (type_ === "platform") return <FaAndroid />;
    if (type_ === "memory") return <BsHdd />;
    if (type_ === "main camera" || type_ === "camera") return <BsCamera />;
    if (type_ === "selfie camera") return <BsCamera2 />;
    if (type_ === "sound") return <BsSpeaker />;
    if (type_ === "comms") return <BsWifi />;
    if (type_ === "battery") return <BsBatteryCharging />;
    if (type_ === "misc") return <FaGlobeAmericas />;
    if (type_ === "tests") return <BsThreeDots />;
    else {
      return <FaFeather />;
    }
  };
  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "-400px 200px -100px 200px",
  });
  return (
    <section
      ref={ref}
      className={inView ? "fade-in-obsrvr" : "fade-in-obsrvr-init"}
    >
      <div>
        <span className='title'>{values[0]}</span>
        {returnIcon(values[0])}
      </div>
      <div className='ckek3lxhwed'>
        {keys.map((e: any, i: number) => {
          if (i === 0) return "";
          let value = values[i];
          // let t = value.toLowerCase().trim();
          // if (t === "n/a" || t === "no") return "";
          return (
            <>
              <span className='mobile-sub'>{e}</span>
              <span className='mobile-text'>{value}</span>
            </>
          );
        })}
        <span className='line-h'></span>
      </div>
    </section>
  );
};
export default RenderSpecs;
