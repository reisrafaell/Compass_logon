<template>
    
         <input  autocomplete="off" @click="$emit('continue')"  :type="type" @keyup="$emit('input', $event.target.value)" required :placeholder=" placeholder" :value="value"  :class=" setClass" >
        
  
</template>
<script>
export default {
    name: 'boxInput',
    
    emits:'continue',
           
       props:{
        type:{
        type:String,
        required: true
        },
        
         placeholder:{
             type:String

             },

             value:{
                 type: String,
                 default: ''
             },
             setClass:{
                 type: String
             },
           
            
             

         },
         data(){
             return{
                 message:''

             }

         },
        methods:{
             

         }

    }            

</script>



<style lang="sass" scoped>
@import './index.scss'
</style>
