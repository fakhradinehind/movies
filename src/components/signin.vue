<template lang="">
     <div>
        
        <h1 >Connexion</h1>
        <br>

         <div class="registre" >
            <input type="email" v-model="user.email" placeholder="entrer votre email">
            <br/>
            <input type="password" v-model="user.password" placeholder="entrer votre password">
            <br/>
            <button id="b1"  @click.prevent="submit" >Connexion</button>
            
         </div>
         
    </div> 
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    
    methods: {
        ...mapActions({
            'signIn': 'signIn'
        }),
       submit() {
           this.signIn(this.user)
           .then(()=>this.$router.replace({name :'films'}))
       }
    },
}
</script>
<style lang="css">
h1{
    text-align: center;
    color:#7A4069;
}
    .registre input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display:block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid #FFC18E;
    }
    .registre button{
        
        width:320px;
        height:40px;
        border: 1px solid #FFC18E;
        background:#7A4069;
        color: #fff;
        display:block;
        margin: auto;
        cursor: pointer;
    }
    .logo{
        width:100px;
        height:52px
    }
    
</style>