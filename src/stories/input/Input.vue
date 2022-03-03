<template>
<div id="center">
   <div :style="style" :class="setClass" class="inputUser">

   <input :style="style" :type="type"
     
      :placeholder="placeholder"
      :value="value"
    />
      <img draggable="false"  v-if="image()" src="../../assets/userIcon.png" alt="iconUser" />
    <img draggable="false" v-else-if="imageInput()" src="../../assets/passwordIcon.png" alt="iconInput" />  
    
  </div>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {

    value:{
      type: String,
        default: "Continue",
       

    },

    text: {
      type: String,
      required: true,
      default: "Default title",
    },


    type: {
        type: String,
        default: "text",
        validator: function (value) {
            return ["button", "submit", "text", "password"].indexOf(value) !== -1;
        },
    },

    color: {
        type: String,
    },

    fontSize:{
        type: String
    },

    backgroundColor:{
        type: String
    }
  },

  computed: {
    setClass() {
      return { [`${this.apply}`]: true,       
      'button':this.type == 'submit' || this.type == 'button' ,                                                       
     
      };

    },
    style() {
      return {
        color: this.color,
        fontSize: this.fontSize,
        backgroundColor: this.backgroundColor
      };
    },
  },
  methods:{
        image() {
      return this.type === "text";
    },
    imageInput(){
      return this.type === "password";
    }
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap%22");
* {
  font-family: "Poppins", sans-serif;
}

#center{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);

 
}
.inputUser{
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 400px;
  height: 60px;   
  margin-bottom: 25px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  box-sizing: border-box;
  background: transparent;
}
.inputUser  img{
    width: 20px;
    height: 20px;
    padding-right: 15px;

  }

.inputUser  input{
    background: transparent;
    width: 100%;
    height: 60px; 
    color: #ffffff;  
    border: 0;
    padding-left: 20px;
}
.inputUser input:focus{
      outline-width: 0;
    }

.inputUser::placeholder{
      color: #ffffff;     
      font-size: 16px;
  }
  
.button{ 
  display: flex;  
  width: 400px;
  height: 60px;   
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 2%;
  margin-bottom: 20px;
  border: 0;
  border-radius: 50px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  
}
 
</style>