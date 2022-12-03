export function DisplaySizes(size: any) {
  let d = size.split("x")[0];
  d = parseInt(d);
  if (d < 480) return d + "p SD Display";
  else if (d > 480 && d < 721) return d + "p HD Display";
  else if (d > 720 && d < 1081) return d + "p FHD Display";
  else if (d > 1080 && d < 1441) return d + "p Quad HD Display";
  else if (d > 1440 && d < 2049) return d + "p 2k Display";
  else if (d > 2048 && d < 2161) return d + "p 4k Display";
  else if (d > 2160 && d < 4321) return d + "p 8k Display";
  else return size + "hello";
}
export function randomNumbers(min: number, max: number) {
  let random = Math.ceil(min + Math.random() * (max - min));
  return random;
}
export const randomChar = (length: number) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let new_ = "";
  let c = 0;
  for (let i = 0; i < length; i++) {
    if (c === 5) {
      new_ += "-";
      c = 0;
    }
    c++;
    let r = Math.ceil(Math.random() * chars.length - 1);
    new_ += chars[r];
  }
  return new_;
};
