<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link :to="{name: 'hi1',params: {username: 'JSPang', id:'888'}}">Hi页面1</router-link> |
      <router-link to="/hi/hi2">Hi页面2</router-link>
    </div>
    <p>{{ $route.name }}</p>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
