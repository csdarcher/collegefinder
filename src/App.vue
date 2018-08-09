<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import Home from './components/Home'
import CollegeList from './components/CollegeList'
import CollegeInfo from './components/CollegeInfo'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'App',
  components: {
    Home
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
  margin: 0;
  height: 100%;
  background-image:linear-gradient(to bottom right, #A6ACAF, #660000);
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

a {
  color: #660000;
}


</style>
