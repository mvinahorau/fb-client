export const setToLocalStorage = (
  key: string,
  data: string | null | undefined
) => {
  localStorage.removeItem(key);
  if (data) {
    localStorage.setItem(key, data);
  }
};

export const getFromLocalStorage = (key: string | null) => {
  if (key) {
    if (localStorage.getItem(key)) return localStorage.getItem(key);
  }
  return null;
};

export const removeFromLocalStorage = (key: string) => {
  if (key) {
    return localStorage.removeItem(key);
  }
  return null;
};

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getCardPosition = (boxW: number, boxH: number) => {
  return {
    top: randomIntFromInterval(boxH - 60, 0) + "px",
    left: randomIntFromInterval(boxW - 30, 0) + "px",
    deg: randomIntFromInterval(30, -30) + "deg",
  };
};
