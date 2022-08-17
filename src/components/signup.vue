<template lang="">
    <body>
        <div>   
            <h1 >Inscription</h1>
            <br>
             <div class="registre" >
                <div>
                    <input type="text" v-model="name" placeholder="enter your name">
                        <p class="error-feedback" v-if="v$.name.$error">
                            {{v$.name.$errors[0].$message}}
                        </p>
                </div>
                <br/>
                <input type="text" v-model="email" placeholder="enter your email">
                    <p class="error-feedback" v-if="v$.email.$error">
                        {{v$.email.$errors[0].$message}}
                    </p>
                <br/>
                <input type="password" v-model="password" placeholder="enter your password">
                    <p class="error-feedback" v-if="v$.password.$error">
                        {{v$.password.$errors[0].$message}}
                    </p>
                <br/>
                <input type="password" v-model="password_confirmation" placeholder="password">
                    <p class="error-feedback" v-if="v$.password_confirmation.$error">
                        {{v$.password_confirmation.$errors[0].$message}}
                    </p>
                <br/>
                <button @click="createaccount" id="b1" >Create account</button> 
             </div>
        </div>
    </body>
</template>
<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import {required,email,minLength,sameAs} from '@vuelidate/validators'

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
            password:{required,minLength:minLength(10)},
            password_confirmation:{sameAsPassword: sameAs('password')}

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
    .error-feedback{
        color:red;
        font-size: small;
        width:fit-content;
        margin:0 auto;
    }
    
</style>