class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, lives = 9) {
        super(name, age);
        this.lives = lives;
    }
    meow() {
        return `${this.name} meows`
    }
}
class Dog extends Pet {
    bark() {
        return `${this.name} barks`
    }
}