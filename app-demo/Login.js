module.exports = class Login{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    login(){
        return `${this.name}------${this.age}`
    }
}

