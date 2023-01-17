<template>
  <h1>fucku</h1>
  <router-link to="/">Home</router-link>
  <router-link to="/Login">Login</router-link>
  <router-view></router-view>
</template>

<script>
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>