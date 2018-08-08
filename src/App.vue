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
  text-align: center;
  color: white;
}

body {
  margin: 0;
  padding-top: 175px;
  height: 100%;
  background-image:linear-gradient(to bottom right, #434343, #660000);
  background-size: cover;
}

app {
    height: 100%;
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
  color: gold;
}

html {
  height: 100%;
}
</style>
