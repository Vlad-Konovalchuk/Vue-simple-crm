<template>
<!-- <b-container class="sidebar"> -->
  <b-row  style="height: 100%">
  <b-col  class="text-left side-nav" cols="2" >
  <b-nav vertical >

    <b-link :to="'/info'">
      <b-nav-item>Account </b-nav-item>
    </b-link>
   
  <b-nav-item>
    <b-link :to="'/countries'">Countries</b-link>
    </b-nav-item>
  <b-nav-item>
    <b-link :to="'/ratings'">Ratings</b-link>
  </b-nav-item>
  <b-nav-item >
    <b-link :to="'/bags'">Bags</b-link>
  </b-nav-item>
</b-nav>
</b-col>
<!-- <b-col cols="10"> -->
  <router-view/>
<!-- </b-col> -->
</b-row>
</template>

<script>
export default {
  name: 'sideBarNav',
}

</script>
<style scoped lang="scss">
ul,li{
  list-style:none;
  margin: 0;
  padding: 0;
}
.nav-item{
    padding: 1.2rem 0;
    font-size: 1.3rem;
    font-weight: bold;
     &:hover{
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.596);
  }
  }
.side-nav{
  background-color:rgb(56, 53, 53);
  color: #fff;
}
a{
  text-decoration: none;
  color:#fff;
  &:hover{
    text-decoration: none;
    color: inherit;
  }
}
</style>