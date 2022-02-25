<template>
<div>
    <div id="logoCompassSmall">
        <img draggable="false" src="@/assets/LogoCompassBlack.png" alt="logoCompassSmall">
    </div>
    <clock/>
    
    
</div>
    
</template>

<script >
import clock from '@/components/clock/index.vue'

export default {
    name: 'homeContainerHeader',
    components:{
        clock
    }
}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>