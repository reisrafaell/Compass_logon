<template>
<div>
    <div id="logoCompassSmall">
        <img draggable="false" src="@/assets/LogoCompassBlack.png" alt="logoCompassSmall">
    </div>
    <clock/>
    <weather/>    
    
</div>    
</template>

<script >
import clock from '@/components/clock/index.vue'
import weather from '../../components/weather/index.vue'

export default {
    name: 'homeContainerHeader',
    components:{
        clock,
        weather

    }
}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>