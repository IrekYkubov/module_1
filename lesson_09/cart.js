'use strict'

{
    const cart = {
        items:[],
        totalPrice:0,
        count:0,

        getTotalPrice() {
            return this.totalPrice;
        },
        add(name, price, countProd = 1) {
            this.items.push({name,price,countProd,});
            this.increaseCount(countProd);
        },
        increaseCount(param) {
            this.count += param;
        },
        calculateItemPrice() {
            const goodsPrice = [];
            for(let i = 0; i < this.items.length; i++) {
                goodsPrice.push(this.items[i].price * this.items[i].countProd);
            }
            const sumPrice = this.summArrayElements(goodsPrice);
            this.totalPrice = sumPrice;
        },
        summArrayElements(arr){
            let x = 0;
            return arr.map(i=>x+=i, x).reverse()[0]
        },
        clear() {
            delete(this.items);
            this.items = [];
            this.totalPrice = 0;
            this.count = 0;
        },
        print() {
            const cartStr = JSON.stringify(cart);
            console.log(cartStr);
            console.log(this.getTotalPrice());
        },
    }

    cart.add('хлеб', 20, 3);
    cart.add('сахар', 25, 3);
    cart.add('лимонад', 27, 3);
    cart.add('сок', 28, 5);
    cart.add('банан', 30, 4);
    cart.calculateItemPrice();
    cart.print();
}