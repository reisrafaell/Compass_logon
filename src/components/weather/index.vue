<template>
 <div id="weatherCenter">
   {{temperatureNumber}}
   {{myCity}}    
   <div v-html="iconHtml"></div>  
  

 </div>
</template>
<script>
import cityStateName from "../../mixins/cityStateName"
export default {
  name: "weather",
  components:{

  },
  data() {
    return {  
      temperatureNumber:"",
      myCity: '',
      dayWeek: "",
     iconHtml:'<img draggable="false" src="../../assets/icons2/01d.png" >'
     
    };
  },
  methods: {
    time() {       
  
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position=>{        
        let lat = position.coords.latitude;        
        let long = position.coords.longitude;    
         
       fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&units=metric&APPID=64ed82577ced7f69cb1687f0ce536131`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`http error: status ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        alert(error.message);
      })
      .then((response) => {
     //  ./../assets/icons2/01n.png
    let iconName = response.weather[0].icon;
    this.iconml = ` <img draggable="false" src="../../assets/icons2/${iconName}.png" >`
    //container_img.innerHTML = `<img draggable="false" src="./assets/icons2/${iconName}.png">`;

    let temperature = `${Math.round(response.main.temp)}°`;
       this.temperatureNumber = temperature;
        let cityName = response.name
        
    fetch('https://api.weatherapi.com/v1/current.json?key=4c8efc495f40411180e180531220302&q='+cityName+'&aqi=no')
    .then((respondes)=> respondes.json()).then(resultado=>{let stateNameCity = resultado.location.region

      let nameState = cityStateName(stateNameCity)     
      this.myCity = `${resultado.location.name} - ${nameState}`; 
    })                  
      });    
    
  }, showError)}//else {alert("Seu navegador não suporta geolozalicação")}
  
      function showError(error) {
      alert(`erro: ${error.message}`);
    }   
},},
  created(){    
    this.time()
  }

    } 

</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
