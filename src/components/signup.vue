<template lang="">
    <body>

        <div>
            
            <h1 >Inscription</h1>
            <br>
             <div class="registre" >
                <input type="text" v-model="name" placeholder="entrer votre nom">
                <br/>
                <input type="text" v-model="email" placeholder="entrer votre email">
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
export default {
    data(){
        return{
                
               name:'',
               email:'',
               password:'',
               password_confirmation:''
           

        }
    },
    methods:{
        async createaccount(){
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