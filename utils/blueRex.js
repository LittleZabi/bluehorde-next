"use strict";
const blueRex = {
  setParams: (data, url = "") => {
    if (Object.keys(data).length < 1) return "";
    let h = "";
    for (let k in data) h += k + "=" + data[k] + "&";
    if (h.substr(-1) === "&") h = h.substring(0, h.length - 1);
    if (url != "") {
      if (url.split("?").length > 1) {
        url = `${url}&${h}`;
      } else {
        url = `${url}?${h}`;
      }
      return url;
    } else {
      return h;
    }
  },
  get: (url, data = {}, headers = {}, async = true) => {
    let x = new XMLHttpRequest();
    return new Promise((a, b) => {
      x.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            let t = this.response;
            a(t);
          } else {
            b(this.response);
          }
        }
      };
      let url_ = blueRex.setParams(data, url);
      x.open("GET", url_, async);
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      for (let header in headers) x.setRequestHeader(header, headers[header]);
      x.send(url_);
    });
  },
  post: (url, data = {}, headers = {}, async = true) => {
    let x = new XMLHttpRequest();
    return new Promise((a, b) => {
      x.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            let t = this.response;
            a(t);
          } else {
            b(this.response);
          }
        }
      };
      x.open("POST", url, async);
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      for (let header in headers) x.setRequestHeader(header, headers[header]);
      x.send(blueRex.setParams(data));
    });
  },
};
export default blueRex;
