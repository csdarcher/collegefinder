<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CircleSpinner from '@/components/CircleSpinner';


export default {
  name: 'App',
  components: {
    Home,
    spinner: CircleSpinner
  }
}
</script>

<style>

#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  margin: auto;
  height: 100%;
  background-image:linear-gradient(to bottom right, #A6ACAF, #A3E4D7);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}


h1,
h2 {
  font-weight: normal;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}



hr { 
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 1px;
}
</style>
