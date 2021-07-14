class pet {
    constructor(name,age){
        console.log('in pet constructor!')
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`
    }

}

class Cat extends pet{
    constructor(name, age, livesLeft = 9){
        console.log('in cat constructor!')
        super(name,age)
        this.livesLeft=livesLeft
    }
    meow(){
        return 'Meow!'
    }
}

class Dog extends pet{
    bark(){
        return 'woof!'
    }
    eat(){
        return `${this.name} scarfs his food!`
    }
}

////////////////samething as above.  we removed the constructor and eat

// class Cat{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating!`
//     }
//     meow(){
//         return 'Meow!'
//     }
// }

// class Dog{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     eat(){
//         return `${this.name} is eating!`
//     }
//     bark(){
//         return 'woof!'
//     }
// }