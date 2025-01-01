<template>
    <div>
      <v-card class="elevation-3 pa-30 ma-4" height="500px">
        
        <v-card-title v-if="image">
          <v-row>
           
          <v-icon>mdi-cctv</v-icon> Prediction: <span class="font-weight-black text-uppercase">{{ prediction }}</span>
        
         
    <audio ref="audio" src="@/assets/mixkit-facility-alarm-sound-999.mp3" preload="auto"></audio>
    <button @click="playSound">Play Sound</button>
 
  </v-row>
    </v-card-title>
 
      <div v-if="image"  class="flex justify-center flex-center align-items-center">
        <img :src="`data:image/jpeg;base64,${image}`" alt="Surveillance Feed" cover height="auto" width="2500px" class="pa-2">
        <!-- <div>
        <p>Prediction: {{ prediction }}</p>
      </div> -->
      </div>
     
      <v-btn @click="startStream" v-if="!image" class="ma-4" color="green">Start Stream</v-btn>
    </v-card>
  
    </div>
  </template>
  
  <script>
  import soundFile from '../assets/mixkit-facility-alarm-sound-999.mp3';
  import io from 'socket.io-client';
  export default {
    data() {
      return {
        socket: null,
        image: null,
        prediction: ''
      };
    },
    methods: {
      playSound() {
      const audio = new Audio(soundFile);
      audio.play();
    },
    //   playSound() {
    //   const audio = new Audio(require('../assets/mixkit-facility-alarm-sound-999.mp3')); // Adjust path to your audio file
    //   audio.play();
    // },
      startStream() {
        this.socket.emit('start_stream');
      },
    },
    mounted() {

      // Connect to Flask SocketIO server
      this.socket = io('http://localhost:5000');
  
      // Listen for classification results from the backend
      this.socket.on('classification_result', (data) => {
        this.image = data.image;  // Update image frame
        this.prediction = data.prediction;  // Update prediction text
        if(this.prediction=='stealing'){
          this.playSound()
        }
      });
    },
    beforeDestroy() {
      if (this.socket) {
        this.socket.disconnect();
      }
    }
  };
  </script>
  
  <style>
  .frame {
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  