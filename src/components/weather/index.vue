<template>
  <div id="weatherCenter">
    <div id="nameCity">    
      <modelTitle setClassdiv="" setClass="" size="font-size: 14px" type="h3" :text=' myCity' />
    </div>
    <div id="boxIcon">
    <img
      draggable="false"
      :src="require(`../../assets/icons2/${iconHtml}.png`)"
    />
      <modelTitle  setClass="temperature" size="font-size: 48px" type="h3" :text='temperatureNumber' />
    </div>   

  </div>
</template>
<script>
import modelTitle from "@/components/title/index.vue"
import cityStateName from "../../mixins/cityStateName";

export default {
  name: "weather",
  components: {
    modelTitle
  },
  data() {
    return {
      temperatureNumber: "",
      myCity: "",
      dayWeek: "",
      iconHtml: "",
    };
  },
  methods: {
    time() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
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
              let nameIcon = response.weather[0].icon;
              this.$store.state.iconName = nameIcon;
              console.log(this.$store.state.iconName);
              this.iconHtml = this.$store.state.iconName;

              let temperature = `${Math.round(response.main.temp)}°`;
              this.temperatureNumber = temperature;
              let cityName = response.name;

              fetch(
                "https://api.weatherapi.com/v1/current.json?key=4c8efc495f40411180e180531220302&q=" +
                  cityName +
                  "&aqi=no"
              )
                .then((respondes) => respondes.json())
                .then((resultado) => {
                  let stateNameCity = resultado.location.region;

                  let nameState = cityStateName(stateNameCity);
                  this.myCity = `${resultado.location.name} - ${nameState}`;
                });
            });
        }, showError);
      }

      function showError(error) {
        alert(`erro: ${error.message}`);
      }
    },
  },
  computed: {
    getIcon() {
      return this.user(this.$store.getters.setIcon);
    },
  },
  created() {
    this.time();
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
