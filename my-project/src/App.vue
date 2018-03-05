<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div v-html="rawhtml"></div>
  </div>
</template>

<script>
//值交换
let x = 1;
let y = 2;
[x,y] = [y,x];
console.log(x,y);
//从函数返回多个值
function example1(){
  return [1,2,3];
}
let [a,b,c] = example1();
console.log(a,b,c);
//函数参数的定义
function example2({x, y, z}){
  console.log(x,y,z);
}
example2({z:5,x:6,y:7});
//提取json数据
let jsonData = {
  id:42,
  status:"ok",
  data:[123,512]
}
let {id,status,data:number} = jsonData;
console.log(id,status,number);
//遍历map数据
const  map = new Map();
map.set("first","one");
map.set("second","two");
for(let [key,value] of map){
 console.log(key + " is " + value);
}
//字符串操作
let s = "hello world";
console.log(s.startsWith('hello'));
console.log(s.endsWith('world'));
console.log(s.includes('wor'));
console.log(s.repeat(2));
//模板字符串
var rawhtml = `
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`;
//Number 处理
console.log(Number.isFinite(1.5));
console.log(Number.isFinite(NaN));
console.log(Number.isNaN(NaN));
console.log(Number.parseInt(12.45));
console.log(Number.parseFloat('12.45sdf'));
console.log(Number.isInteger(12.45));
console.log(Number.EPSILON);
console.log(Number.isSafeInteger(9007199254740992));
//Math 处理
console.log(Math.trunc(12.45));
console.log(Math.trunc(true));
console.log(Math.trunc('asd'));
console.log(Math.sign(5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-5));
console.log(Math.sign(NaN));
console.log(Math.cbrt(8));
console.log(Math.cbrt('8'));
console.log(Math.cbrt('asd8'));
console.log(2**8);
//函数默认值
function example3(x,y = 'sad'){
  console.log(x,y);
}
example3('arw');
example3('arw','');
//rest 参数
function example4(...values){
  var string = '';
  for(let val of values){
    string +=val;
  }
  console.log(string);
}
example4(4,3,1,'asd00');
//函数名称
console.log(example3.name);
//扩展操作
console.log(...[1, 2, 3])
function example5(x,y,z){
  console.log(x,y,z);
}
let args = [3,2,1];
let args2 = [...args];
args2[0] = 5;
example5(...args);
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(rest)
console.log(...'asdaga');
//数组操作
let cloud = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length:3
};
console.log(...Array.from(cloud));
console.log(Array.of(1,3,8));
console.log([1,2,3,4,5,-1].find((n) => n<0));
console.log([1,2,3,4,5,-1].findIndex((n) => n<0));
console.log([1,2,3,4,5,-1].fill(7));
for(let ele of ['a', 'b'].keys()){
  console.log(ele);
}
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
console.log(0 in [undefined, undefined, undefined]);
//对象操作
let Person = {
  name:'kepping',
  hello(){
    console.log('hello');
  }
}
Person.hello();
console.log(Object.is('foo','foo'));
console.log(Object.is(0,-0));
let course = {
  courseName:'asd'
}
Object.assign(Person,course);
console.log(Person);
console.log(Object.getOwnPropertyDescriptors(Person,'name'));
for(let name in Person){
  console.log(name);
}
console.log(Object.setPrototypeOf(course,{x:1}));
console.log(course.x);
const protoTest = {
  find(){
    return super.courseName;
  }
}
Object.setPrototypeOf(course,protoTest);
console.log(course.__proto__ );
const proto = {
  foo: 'hello'
};

const obj = {
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
console.log(obj.find())// "hello"

var parent = {
  name : "parent"
};
var child = {
  name : "child",
  __proto__ : parent
};
var subChild = {
  name : "subChild",
  __proto__ : child
}
console.log(subChild);
//symbol
let sym1 = Symbol('foo');
let sym2 = Symbol(parent);
let sym3 = Symbol();
let sym4 = Symbol();
console.log(sym1);
console.log(sym2);
let symObj = {
  [sym3]:'lalala',
  [sym4]:'lalal4',
  sym4:'LALAL4'
};
console.log(symObj);
console.log(symObj[sym4]);
console.log(Object.getOwnPropertySymbols(symObj));
let sym5 = Symbol.for('foo');
let sym6 = Symbol.for('foo');
console.log(sym5==sym6);
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

{
  const a = new MyArray();
const b = a.map(x => x);
console.log(b instanceof MyArray) // false
console.log(b instanceof Array) // true
}
//set map结构
const set1 = new Set();
[1,3,4,5,123,51,1].forEach((a)=>set1.add(a));
set1.forEach((value,key)=>console.log(value+':'+key));
console.log(set1);
const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}
console.log(map1);
const map2 = new Map(
  [...map1].map(([k, v]) => [k * 2, '_' + v])
    );
console.log(map1);
console.log([...map1]);
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
//proxy 
var proxy = new Proxy({},{
  get:function(target,property){
    console.log(JSON.stringify(target),property);
    return 35;
  }
})
console.log(proxy.time);
var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
};


//reflect
let reflectObj = {
  reflectName:'dabaicai'
}
console.log(Reflect.has(reflectObj,'reflectName'));
Reflect.defineProperty(reflectObj,'defineValue',{
  value:'defineValuealdkaw'
})
console.log(reflectObj);
console.log(Reflect.get(reflectObj,'reflectName'));
Reflect.set(reflectObj,'setValue','setValue')
console.log(reflectObj);
console.log(Reflect.deleteProperty(reflectObj,'reflectName'));
console.log(reflectObj);
function reflectClass(name){
  this.name = name;
}
console.log(Reflect.construct(reflectClass,['reflectClassName']));
console.log(Reflect.getPrototypeOf(reflectObj));
Reflect.setPrototypeOf(reflectClass,Reflect.getPrototypeOf(reflectObj))
console.log(Reflect.getPrototypeOf(reflectClass))
const ages = [11, 33, 12, 54, 18, 96];
console.log(Reflect.apply(Math.min,Math,ages));
console.log(Reflect.getOwnPropertyDescriptor(reflectObj,'defineValue'));
console.log(Reflect.isExtensible(reflectObj));
console.log(Reflect.preventExtensions(reflectObj));
console.log(Reflect.isExtensible(reflectObj));
console.log(Reflect.ownKeys(reflectObj));
//promise
let promiseObj = new Promise(function(resolve,reject){
  console.log('promise');
  resolve('asd');
  
});
promiseObj.then((result)=>console.log(JSON.stringify(result))).catch((error=>console.log(error+'error')));
console.log('hi');
const promises = [2, 3, 5, 7, 11, 13].map((id)=> new Promise((resolve,reject)=>resolve(id)));
Promise.all(promises).then((results)=>console.log(results));
//iterator
class RangeIterator{
  constructor(start,end){
    this.value = start;
    this.stop = end;
  }
  [Symbol.iterator](){
    return this;
  }
  next(){
    var value = this.value;
    if(value < this.stop){
      this.value++;
      return {done:false,value:value};
    }
    return {done:true,value:undefined};
  }
}
function range(start,end){
  return new RangeIterator(start,end);
}
for(let value of range(0,3)){
  console.log(value);
}
let myIterator = {
  [Symbol.iterator]:function*(){
    yield 1;
    yield 3;
    yield 5;
  }
}
for (let x of myIterator) {
  console.log(x);
}
//generator
function* dataConsumer() {
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

let genObj = dataConsumer();
// Started
genObj.next('a')
// 1. a
genObj.next('b')
function * inner(){
  yield 'hello';
}
function * outer(){
  yield 1;
  yield * inner();
  yield 2;
}
for(let v of outer()){
  console.log(v);
}
export default {
  name: 'App',
  data(){
    return {
      rawhtml
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
