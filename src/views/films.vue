<template lang="">
    <div>
        <h1 v-if="authenticated">films</h1>
        <h1 v-if="authenticated">{{user.name}}</h1>
        <router-link to="/signin" v-if="!authenticated" >connecter vous</router-link>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            'authenticated':'authenticated',
            'user':'user'
        })
    }
}
</script>
<style lang="css" scoped>
 
</style>