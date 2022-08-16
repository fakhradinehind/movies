<template lang="">
   <div class="my-3 pag ">
    <button class="btn btn btn-primary " @click="previous">
            Previous
    </button>
     <button class="btn btn btn-primary" @click="redirect">
        Redirect
    </button>
     <button  class="btn btn btn-primary" @click="next">
        Next
    </button>

</div>
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
.pag{
   align-items: flex-end;
}
</style>