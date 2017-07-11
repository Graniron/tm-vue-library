<template>
  <div id="app">
    <nav>
      <router-link to="/books">Books</router-link>
      <router-link to="/add-book">Add book</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body {
    margin: 0
  }
  nav {
    background: darkcyan;
    padding: 10px;
  }
  nav a {
    color: #fff;
    text-decoration: none;
  }
</style>
