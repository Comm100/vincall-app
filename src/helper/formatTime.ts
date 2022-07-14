const format = (time: number): string => {
  if (!time) {
    return "00";
  }
  if (time <= 9) {
    return `0${time}`;
  }
  return String(time);
};

export const toCallTimeString = (time: number): string => {
  let r = "";
  r = format(time % 60);
  time = Math.floor(time / 60);
  r = format(time % 60) + ":" + r;
  time = Math.floor(time / 60);
  r = time + ":" + r;
  return r;
};
