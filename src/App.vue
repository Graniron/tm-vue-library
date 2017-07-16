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
    font-family: 'Lobster Two', cursive;
    margin: 0;
  }
  nav {
    background: darkcyan;
    padding: 10px;
    text-align: center;
  }
  nav a {
    color: #fff;
    margin-right: 15px;
    text-decoration: none;
  }

  .page-cont {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
