<template lang="">
    
    <div >
       
        
        <button  class="btn btn-primary btn-sm" @click="next">
           Next
       </button>

       &nbsp;&nbsp;
         <button class="btn btn-primary btn-sm" @click="redirect">
            Redirect
        </button>
        &nbsp
         <button class="btn  btn-primary btn-sm" @click="previous">
                Previous
        </button>
    </div>
        
    <br>

</template>
<script>
export default {
     methods:{
        previous(){
            this.$router.go(-1);
        },
        next(){
            this.$router.go(1);
        },
        redirect(){
            this.$router.push('/');
        }
    }
}
</script>
<style>

 .btn{
   float:right;
   background-color: #FFC18E;
   border-radius: 7px;
   border:none;
   margin-left:15px;
   width:100px;
   height: 25px;
   cursor: pointer;


 }
 .btn:hover{
    background-color: #CA4E79;
    color:#fff;

 }
 
</style>