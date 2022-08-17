<template lang="">
    <body>

        <div>
            
            <h1 >Inscription</h1>
            <br>
             <div class="registre" >
                <input type="text" v-model="name" placeholder="entrer votre nom">
                <span class="error-feedback" v-if="v$.name.$error">
                        {{v$.name.$errors[0].$message}}
                    </span>
                <br/>
                <input type="text" v-model="email" placeholder="entrer votre email">
                <span class="error-feedback" v-if="v$.email.$error">
                        {{v$.email.$errors[0].$message}}
                    </span>
                <br/>
                <input type="password" v-model="password" placeholder="entrer votre password">
                <br/>
                <input type="password" v-model="password_confirmation" placeholder="password">
                <br/>
                <button @click="createaccount" id="b1" >Creer un compte</button>
                
                
             </div>
             
             
        </div>
    </body>
</template>
<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import {required,email,minLength} from '@vuelidate/validators'

export default {
    data(){
        return{
                v$: useValidate(),
               name:'',
               email:'',
               password:'',
               password_confirmation:''
           

        }
    },
     validations(){
        return{
            name:{required,minLength:minLength(10)},
            email:{required,email},
            password:{required,minLength:minLength(10)}
        }
    },
    methods:{
        async createaccount(){
            this.v$.$validate()
            const response=await axios.post('/auth/register',{
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation
            })
            if(response.status==201){
                this.$router.replace({name :'signin'})
                localStorage.setItem('user-info',JSON.stringify(response.data))
            }
            else{
                alert('not found')
            }
            
           
            
            
        }
    }
    
}
</script>
<style lang="css" scoped>
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
        background:#7A4069 ; 
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