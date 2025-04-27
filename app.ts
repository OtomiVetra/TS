type TotalPriceParams = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months?: number;
};

const totalPrice = (params: TotalPriceParams): number => {
  const { price, discount, isInstallment, months } = params;

  if (discount < 0 || discount > 100) {
    throw new Error('Скидка должна быть в диапазоне от 0 до 100');
  }

  if (isInstallment) {
    if (months === undefined || months <= 0) {
      throw new Error(
        'При рассрочке нужно указать количество месяцев больше 0'
      );
    }
  }

  const discountedPrice = price - (price * discount) / 100;

  return isInstallment ? discountedPrice / months! : discountedPrice;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

console.log(price);
