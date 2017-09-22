// import {Cache} from './cache'
let Cache = require('./cashe')

Cache.set('hello world')
console.log(Cache.get())
Cache.set('hello world')

let Cache2 = require('./cashe')
console.log(Cache2.get())
console.log(Cache === Cache2)

