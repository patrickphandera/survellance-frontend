<template>
    <v-card
      class="mx-auto mt-12 elevation-1 "
      max-width="344"
      
    >
    <v-container class="text-black text-center">
      <span class="text-h6 text-bold text-center ">
       Survellance AI 
    </span><br>
      <span class="text-h6 text-center font-weight-black">
       LOGIN
      </span>
      
      <div>
        <v-icon icon="mdi-chevron-menu" color="green" size="12"></v-icon>
      </div>
    </v-container>
      <v-container>
       
  
        <v-text-field
        density="compact"
          v-model="last"
          color="green"
          label="Email"
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
        
          
      
      
    
  
     
   
     
        
 
        <v-btn color="green" block variant="flat" class=" px-4 text-none mb-4">
          LOGIN
  
        </v-btn>
       
      
      
        <v-btn  block variant="outlined" class="text-none align-self-end">
          Not already registered?  <span class="text-green">REGISTER</span>
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