// GRASP

class Order {
    constructor() {
        this.items = [];
    }

    addItem(name, price) {
        console.log(`Adicionando item: ${name} - R$${price}`);
        this.items.push(new Item(name, price));
    }

    getTotal() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        console.log(`Calculando total do pedido: R$${total}`);
        return total;
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class OrderController {
    finalizeOrder(order) {
        console.log("Iniciando finalização do pedido...");

        if (order.items.length === 0) {
            console.log("Erro: Pedido vazio!");
            return;
        }

        const total = order.getTotal();
        console.log(`Pedido finalizado! Total: R$${total}`);
    }
}

const order = new Order();
order.addItem("Mouse", 50);
order.addItem("Teclado", 150);

const controller = new OrderController();
controller.finalizeOrder(order);
