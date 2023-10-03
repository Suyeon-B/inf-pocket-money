export const getPriceDisplayStr = (price: string | number) => {
  const roundedPrice = Math.ceil(Number(price));
  return `${roundedPrice.toLocaleString("ko")}`;
};
