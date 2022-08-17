<template>
  <div class="home">
    <!--
      <img class="logo" alt="Vue logo" src="..\assets\img.png" />
    -->
    <navbar/>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from '@/components/Home/navbar.vue'
export default {
  name: 'HomeView',
  components: {
    navbar,
}
}
</script>
<style>
 .logo{
        width:100px;
        height:52px;
        
        margin-left: 580px;
    }
</style>
