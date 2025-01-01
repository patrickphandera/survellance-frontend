<template>
    <div>

        <v-card class="ma-4 elevation-2">
            <v-card-title>
                <v-text-field variant="outlined"  label="Search images" density="compact" >
                    <template v-slot:append-inner >
<v-icon>mdi-magnify</v-icon>
                    </template>

                </v-text-field>
            </v-card-title>
 <v-row class="px-2">
    <v-col cols="4" v-for=" i in ['vvv','hdhd','','','','']">
        <v-card
        variant="outlined"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>
    <div class="py-2 px-2">
      Day {{ new Date().getDay() }}, Month {{new Date().getMonth()   }}, Year :{{ new Date().getFullYear() }}
    </div>

    <!-- <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Explore"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions> -->

    <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition> -->
  </v-card>
    </v-col>
 </v-row>
</v-card>
</div>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>