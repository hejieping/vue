<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
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
export default {
  name: 'App'
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
