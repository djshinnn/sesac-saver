// 숫자 -> 한국 통화 변환
export const currencyFormatter = (money) => {
  const formatter = new Intl.NumberFormat("ko", {
    style: "currency",
    currency: "krw",
  });
  return formatter.format(money);
};
