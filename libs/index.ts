export const scrollToDiv = (element: string) => {
  document.getElementById(element)?.scrollIntoView();
};

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};
