const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

/*CRIAR UMA FUNÇÃO CONSTRUTORA QUE VAI FICAR RESPONSÁVEL POR INSTANCIAR UM OBJETO 
DO TIPO PRODUTO
*/

//Funções construtoras instanciam objetos com uma estrutura pré-definida.

//A palavra chave this é uma referência para o próprio objeto.

const Product = function(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;


}

//Boa prática: defina propriedades dentro do construtor, e métodos no prototype.

//incluir novos membros neste objeto;

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.remove = function(amount) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
        }

    }
    //retornar os dados do produto na forma de string

Product.prototype.label = function() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
}



//instanciar um produto usando a função construtora

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);

//Todos objetos herdam o prototype de Object.(mãe de todas)
/*
prototype de uma função;
É um mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros (Mozilla).
O prototype de um construtor define uma estrutura de membros que são compartilhados pelas instâncias desse construtor.
Prototype é um objeto pertencente as funções
*/

//Depois do ES6 (2015), a estrutura dos objetos podem ser definida por classes.