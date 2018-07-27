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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: silver;
}



app {
    height: 100%;
}

</style>
