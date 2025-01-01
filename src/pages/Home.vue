<template>
  <v-card
    class="mx-auto mt-12 elevation-0"
    max-width="344"
    
  >
  <v-container class="text-black text-left">
    <div class="text-h4 text-bold text-center">
      Get  started
    </div>
    <div class="text-h6 text-center">
      by creating account
    </div>
  </v-container>
    <v-container>
      <v-text-field
            model-value="John Doe"
        v-model="first"
        color="blue-darken-4"
        label="Full name"
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="blue-darken-4"
        label="Email"
       variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="blue-darken-4"
        label="Whatsapp number"
         variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="blue-darken-4"
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="password"
        color="blue-darken-4"
        label="Comfirm password"
        placeholder="Enter your password"
        variant="outlined"
      ></v-text-field>
      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to terms and conditions here"
      ></v-checkbox>
    </v-container>

   

    <v-card-actions>
      

      <v-btn color="success" block variant="flat" class="text-none" >
        Next

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
      
    </v-card-actions>
    <v-card-actions>
      

      <v-btn color="success" block variant="outline" class="text-none">
        Already a member?, <span class="text-blue-darken-4">log in</span>
      </v-btn>
      
    </v-card-actions>
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