<template>
<div id="example-1">
  <button v-on:click="counter += 1">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
  <button v-on:click="greet">Greet</button>
  <button v-on:click="say('what')">Say what</button>
  <!-- 阻止单击事件冒泡 -->
  <a v-on:click.stop="doThis">1</a>
  <input v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>
  <div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
  <div id="example-3">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello123</p>
  </transition>
</div>
</div>
</div>
</template>

<script>
import animation from 'animate.css'
export default {
  name: 'example-1',
  data () {
    return {
      counter: 0,
      message:'init',
      show:true
    }
  },
    // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message) {
      alert(message)
    },
    doThis:function(){
      alert('sa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
