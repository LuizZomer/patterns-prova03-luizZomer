// O - Open/close principle
class NoDiscount {
    apply(price) {
        return price;
    }
}

class VipDiscount {
    apply(price) {
        return price * 0.9;
    }
}

class BlackFridayDiscount {
    apply(price) {
        return price * 0.8;
    }
}

class PriceCalculator {
    constructor(discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    calculate(price) {
        return this.discountStrategy.apply(price);
    }
}

const calculator = new PriceCalculator(new VipDiscount());
console.log("Preço final:", calculator.calculate(100));
