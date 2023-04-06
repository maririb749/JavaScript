//Classes em JavaScript são um syntactic sugar para funções contrutoras e prototypes.
//syntactic sugar= uma forma diferente de escrever mas que vai produzir o mesmo
//resultado da contrutoras e prototypes.

class Product {

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
//instanciando produtos para testar;

const p1 = new Product("Monitor", 800.0, 10);

const p2 = new Product("Mouse", 50.0, 4);