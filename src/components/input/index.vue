<template>
    
         <input autocomplete="off" @click="$emit('continue')"   :type="type"  required :placeholder=" placeholder" :value="value" :class=" setClass" >
        
  
</template>
<script>
export default {
    name: 'boxInput',
    emits: 'continue',
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
             }
            
             

         }

    }            

</script>



<style lang="sass" scoped>
@import './index.scss'
</style>
