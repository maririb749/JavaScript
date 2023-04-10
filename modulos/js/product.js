export default class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity
    }
    total() {
        return this.price * this.quantity;
    }
    adda(amount) {
        this.quantity += amount;
    }
    remove(amount) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
        }
    }
    label() {
        return "Dados:" + this.name + ", " + this.price.tofixed(2);
    }

}