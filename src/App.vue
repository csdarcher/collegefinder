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
  background-image: url('assets/scott-webb-270034-unsplash.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: grey;
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
