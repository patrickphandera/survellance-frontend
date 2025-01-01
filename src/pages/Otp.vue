<template>
    <v-card
    max-width="344"
      class="mx-auto elevation-0"
      
      
    >
    <v-container class="text-black text-left">
      <div class="text-h4 text-bold text-center">
       You're almost there
      </div>
      <div class="   mt-2 text-justify">
        We have sent a verification code to your Whatsapp number <span class="text-blue-darken-4 ">+26598488484</span>   and email <span class="text-blue-darken-4 ">patrickphandera@gmail.com</span>
      </div>
    </v-container>
      <v-container>
       
  
        
      
    

   

    <v-sheet color="surface">
      <v-otp-input
      size="3"
        v-model="otp"
        error
        class="elevation-0"
        type="password"
        variant="outlined"
      ></v-otp-input>
    </v-sheet>

        
  
    
 
  <v-btn
        block
      class="my-4"
      color="blue-darken-4"
  
      
      text="Verify"
      variant="flat"
      width="70%"
    ></v-btn>

   
        
   
        
  
        <v-btn  color="blue-darken-4 text-none" variant="flat" block>
      Didn't  received code?, Resend again
    </v-btn>
       
    
    <v-btn  block variant="outline" class="text-none">
        Request new code in 100 seconds
        </v-btn>
       
      </v-container>
  
     <v-card-actions>
        
     </v-card-actions>
  
     <div class=" px-4 "><v-btn class="elevation-0"  icon="mdi-keyboard-backspace" color="blue-darken-4">

       
     </v-btn></div>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
        loading: false,
      otp: '',

      }),
      methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
    },
    }
  </script>