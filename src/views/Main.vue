<template>
<b-container fluid style="height: 100%">
    <Header/>
    <sidebarnav></sidebarnav>
    <div><router-view></router-view></div>
    
</b-container>
 
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
  }
  
}

</script>
<style scoped lang="scss">
.container-fluid{
  height: 100%;
  padding: 0;
}
.btn-toggle{
    height: 100px;
    width: 200px;
}
</style>
