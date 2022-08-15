<template>
  <div class="home">
    
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
