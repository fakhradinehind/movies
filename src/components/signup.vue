<template lang="">
    <div>
        <img class="logo" alt="Vue logo" src="..\assets\img.png" />
        <h1 >Inscription</h1>
        <br>
         <div class="registre" >
            <input type="text" v-model="nom" placeholder="entrer votre nom">
            <br/>
            <input type="text" v-model="prenom" placeholder="entrer votre prenom">
            <br/>
            <input type="email" v-model="email" placeholder="entrer votre email">
            <br/>
            <input type="password" v-model="password" placeholder="entrer votre password">
            <br/>
            <button @click="createaccount" id="b1" >Creer un compte</button>
            
         </div>
         
    </div>
</template>
<script>
export default {
    data(){
        return{
           
            nom:'',
            prenom:'',
            email:'',
            password:''

        }
    },
    
}
</script>
<style lang="css" scoped>
h1{
    text-align: center;
}
    .registre input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display:block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }
    .registre button{
        
        width:320px;
        height:40px;
        border: 1px solid skyblue;
        background:skyblue;
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