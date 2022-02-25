<template>
 <div id="clockCenter">
      <modelTitle  setClass="clock" size="font-size: 146px" type="h1" :text='actualClock' />
      <modelTitle setClassdiv="contentClockP" setClass="clockText" size="font-size: 14px" type="h3" :text='dayWeek' />
   
 </div>
</template>
<script>
import modelTitle from "@/components/title/index.vue"
import nameDayWeek from '@/mixins/nameDayWeek'
import nameMonthYear from '@/mixins/nameMouthYear.js'
export default {
  name: "clock",
  components:{
    modelTitle
  },
  data() {
    return {  
      actualClock:"",
      dayWeek: ""    
    };
  },
  methods: {
      
    currentTime: function(){
      let time = this;     
      setInterval(function(){
        let date = new Date();
        let year = date.getFullYear();
        let monthDay = date.getDate()
        let month = date.getMonth()
        let weekDay = date.getDay();
        let hours = date.getHours();
        let minutesDay = date.getMinutes(); 
      
        time.actualClock = `${hours <= 9 ? "0" : ""}${hours}:${minutesDay <= 9 ? "0" : ""}${minutesDay}`;
        time.dayWeek =` ${nameDayWeek(weekDay)}, ${monthDay <= 9 ? "0" : ""}${monthDay} ${nameMonthYear(month)} de ${year}`

      },1000);        
     
    },
 
  },
  mounted(){
    this.currentTime()
  }

    } 

</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
