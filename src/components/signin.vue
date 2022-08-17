<template lang="">
     <div>
        
        <h1 >Connexion</h1>
        <br>

         <div class="registre" >
            <input type="email" v-model="user.email" placeholder="entrer votre email">
             <p class="error-feedback" v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</p>
            <br/>
            <input type="password" v-model="user.password" placeholder="entrer votre password">
            <p class="error-feedback" v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</p>
            <br/>
            <button id="b1"  @click.prevent="submit" >Connexion</button>
            
         </div>
         
    </div> 
</template>
<script>
import { mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core'
import {required,email,minLength} from '@vuelidate/validators'
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
             v$:useVuelidate(),
        }
    },
    validations(){
        return{
            password:{required,minLength:minLength(10)},
            email:{required,email}
        }
    },
    
    methods: {
        ...mapActions({
            'signIn': 'signIn'
        }),
       submit() {
            this.v$.$validate()
            if(!this.v$.$error){
                this.signIn(this.user)
                .then(()=>this.$router.replace({name :'films'}))
            }
       }
    },
}
</script>
<style lang="css">
h1{
    text-align: center;
    color:#fff;
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
    .error-feedback{
        color:red;
        font-size: small;
        width:fit-content;
        margin:0 auto;
    }
    
</style>