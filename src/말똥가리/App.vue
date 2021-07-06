<template>
  <div id="app">
    <div>
    <router-link to="/">Dashboard</router-link>
    <router-link to="/grid-system">GridSystem</router-link>
    <router-link to="/test">test</router-link>
        <router-link to="/test2">test2</router-link>

    </div>
    <v-container>
    <router-view/>
    </v-container>
  </div>

</template>

<script>
export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
