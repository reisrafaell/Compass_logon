<template>
<div>
<homeContainerLeft/>
<homeContainetRight/>
</div>
    
</template>

<script >
import homeContainerLeft from '@/containers/homeContainerLeft/index.vue'
import  homeContainetRight from '@/containers/homeContainerRight/index.vue'

export default {
    name: 'homeContainerCenter',
    components:{
        homeContainerLeft,
        homeContainetRight
    }
}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
