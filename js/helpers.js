export const setAttributes = (el, attrs) => {
  Object.keys(attrs).forEach((key) => {
    el.setAttribute(key, attrs[key]);
  });
}
