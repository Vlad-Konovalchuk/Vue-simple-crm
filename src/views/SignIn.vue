<template>
  <div class="home">
    <Header/>
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'signIn',
  components:{
    Login
  }
}
</script>
<style scoped lang="scss">
</style>
