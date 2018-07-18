<template>
  <div id="app"  style="height: 100%">
    <b-container fluid style="height: 100%">
      <Header/>
      <sidebarnav></sidebarnav>
    </b-container>
  </div>
</template>

<script>

import SideBarNav from '@/components/SideBarNav.vue'
import Header from '@/components/Header.vue'

import { mapState,mapMutations  } from 'vuex';

export default {
  name: 'main',
  components:{
      Header,
      sidebarnav:SideBarNav,
  },
  computed: mapState({
    products: state => state.user
  }),
  methods:{
       ...mapMutations([
      'signOut'
       ])
  },
  mounted(){
    window.fbAsyncInit = function() {
    FB.init({
      appId      : 262378507883393,
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  }
  
}
  
</script>
<style lang="scss">
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
body{
  height: 100vh;
  background: linear-gradient(135deg, #feffe8 0%,#d6dbbf 100%);
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.container-fluid{
  margin: 0 !important;
  padding: 0 !important;
}
// a {
//     color: #fff;
//     font-weight: bold;
//     font-size: 1.3rem;
//     text-decoration:none;
  
//     &.router-link-exact-active {
//          color: #d7dde2c9;
//     }
//   }
//   .nav__item{
//     padding: 1rem 0;
//   }


// .header{
//   grid-column: span 8;
//   background-color: rgba(18, 82, 134, 0.829);
//   color: #fff;
//   &__list{
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//   }
//   &__item{
//     padding: 0.7rem;
//     cursor: pointer;
//   }
// }

</style>
