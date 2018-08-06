<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import Home from './components/Home'
import CollegeList from './components/CollegeList'
import CollegeInfo from './components/CollegeInfo'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Righteous', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  margin-top: 200px;
  margin: 0;
  padding: 250px;
  height: 100%;
  background-image:linear-gradient(to bottom right, #434343, #660000);
}

app {
    height: 100%;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: black;
}

body,
html {
  height: 100%;
}
</style>
