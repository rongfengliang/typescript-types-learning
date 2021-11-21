
/// <reference types="@dalongrong/types-demo-types" />

const {Login} = require("@dalongrong/types-demo")

console.log(Login)

var myuser = new Login("dalong",333)

console.log(myuser.login())