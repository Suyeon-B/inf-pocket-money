export const getPriceDisplayStr = (price: string | number) => {
  const roundedPrice = Math.ceil(Number(price));
  return Number(price) ? `${roundedPrice.toLocaleString("ko")}` : price;
};
