<template>
  <div>
    <v-card class="elevation-3 pa-30 ma-4" height="500px">
      <v-card-title v-if="image">
        <v-row>
          <v-col>
            <v-icon>mdi-cctv</v-icon> Prediction: <span class="font-weight-black text-uppercase">{{ prediction }}</span>
          </v-col>
          <v-col auto></v-col>
          <div v-if="on">
            <v-icon size="60px" color="red">mdi-circle-small</v-icon>
            <audio ref="audio" src="@/assets/mixkit-facility-alarm-sound-999.mp3" preload="auto"></audio>
            <v-btn color="green" class="ma-2 text-none" @click="stopSound">Stop alarm</v-btn>
          </div>
        </v-row>
      </v-card-title>

      <div v-if="image" class="flex justify-center flex-center align-items-center">
        <img :src="`data:image/jpeg;base64,${image}`" alt="Surveillance Feed" cover height="auto" width="2500px" class="pa-2" />
      </div>

      <v-btn v-if="!image" @click="startStream" class="ma-4" color="green">Start Stream</v-btn>
    </v-card>
  </div>
</template>

<script>
import io from "socket.io-client";
import soundFile from "../assets/mixkit-facility-alarm-sound-999.mp3";

export default {
  data() {
    return {
      on: false,
      socket: null,
      image: null,
      audio: new Audio(soundFile),
      prediction: ""
    };
  },
  methods: {
    playSound() {
      this.audio.play();
    },
    async initiate() {
      // Connect to Flask SocketIO server
      this.socket = io("http://localhost:5000");

      // Listen for classification results from the backend
      this.socket.on("classification_result", async (data) => {
        this.image = data.image; // Update image frame
        this.prediction = data.prediction; // Update prediction text
        if (this.prediction === "stealing") {
          this.on = true;
          this.playSound();
        }
      });
    },
   
    stopSound() {
      this.on = false;
      this.audio.pause();
      this.audio.currentTime = 0; // Reset audio to start
    },
    async startStream() {
      await this.initiate();
      this.socket.emit("start_stream");
    }
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
