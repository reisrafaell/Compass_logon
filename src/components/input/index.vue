<template>
    <div>
         <input autocomplete="off"   :type="type" name="password" required :placeholder=" placeholder" :value="value" class="" >
        
    </div>
</template>
<script>
export default {
    name: 'boxInput',
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
             class:{
                 type: String
             }
            
             

         }

    }            

</script>



<style lang="sass" scoped>
@import './index.scss'
</style>
