<template>
    <v-card
      class="mx-auto  elevation-1  mt-12"
      max-width="344"
      
    >
    <v-container class="text-blactk text-center">
      
<div>
  <span class="text-h6 text-bold text-center ">
       Survellance AI 
    </span><br>
      <span class="text-h6 text-center font-weight-black">
       REGISTER
      </span>
</div>
    </v-container>
      <v-container>
        <v-text-field
        density="compact"
              model-value="John Doe"
          v-model="first"
          color="green"
          label="Full name"
          variant="outlined"
        ></v-text-field>
  
        <v-text-field
        density="compact"
          v-model="last"
          color="green"
          label="Email"
         variant="outlined"
        ></v-text-field>
  
        <v-text-field
        density="compact"
          v-model="email"
          color="green"
          label="Whatsapp number"
           variant="outlined"
        ></v-text-field>
  
        <v-text-field
        density="compact"
          v-model="password"
          color="green"
          label="Password"
          placeholder="Enter your password"
          variant="outlined"
        ></v-text-field>
        <v-text-field
        density="compact"
          v-model="password"
          color="green"
          label="Comfirm password"
          placeholder="Enter your password"
          variant="outlined"
        ></v-text-field>
      
        <v-btn color="green" block variant="flat" class="text-none" >
          REGISTER
        
        </v-btn>
        
      
     
        
  
        <v-btn  block variant="outlined" class="text-none mt-2">
          Registered already?  <span class="text-green">log In</span>
        </v-btn>
      </v-container>
  
     
  
    
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
      }),
    }
  </script>