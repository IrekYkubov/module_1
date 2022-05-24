'use strict';

{
  const cart = {
    items: [],
    count: 0,
    discount: '',
    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      }
      if (promocode === 'NEWYEAR') {
        this.discount = 21;
      }
    },
    get totalPrice() {
      return this.calculateItemPrice();
    },
    add(name, price, countProd = 1) {
      this.items.push({name, price, countProd});
      this.increaseCount(countProd);
    },
    increaseCount(param) {
      this.count += param;
    },
    calculateItemPrice() {
      const goodsPrice = [];
      let sale;
      for (let i = 0; i < this.items.length; i++) {
        goodsPrice.push(this.items[i].price * this.items[i].countProd);
      }
      const sumPrice = this.summArrayElements(goodsPrice);
      if (this.discount === 15) {
        sale = sumPrice * 0.15;
        return sumPrice - sale;
      }
      if (this.discount === 21) {
        sale = sumPrice * 0.21;
        return sumPrice - sale;
      }
      return sumPrice;
    },
    summArrayElements(arr) {
      let x = 0;
      return arr.map(i => x += i, x).reverse()[0];
    },
    clear() {
      delete (this.items);
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
      this.discount = '';
    },
    print() {
      const cartStr = JSON.stringify(cart);
      console.log(cartStr);
      console.log(this.totalPrice);
    },
  };

  cart.add('хлеб', 20, 3);
  cart.add('сахар', 25, 3);
  cart.add('лимонад', 27, 3);
  cart.add('сок', 28, 5);
  cart.add('банан', 30, 4);
  cart.setDiscount = 'NEWYEAR';
  cart.totalPrice;
  cart.print();
}
