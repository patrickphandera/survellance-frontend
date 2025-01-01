<template>
  <v-app >
   
  <v-navigation-drawer
        app
        permanent
        right
        width="280"
        elevation="1"
      >
      <v-list title="gfgfgfg">
        
          <v-list-item class="mb-5"
           
          >
            <template v-slot:prepend>
              <v-avatar image="/download.jfif"></v-avatar>
              
              <div class="ma-1 text-subtitle-2">Sebastian</div>
              <v-btn
                icon="mdi-chevron-down"
                size="medium"
                variant="tonal"
                density="dense"
                
              ></v-btn>
             
            </template>
            <template v-slot:append>
             
             
              <v-btn
                icon="mdi-bell"
                size="small"
              
                variant="text"
              ></v-btn>
            </template>
            
          </v-list-item>
          
          <v-divider ></v-divider>
          <!-- <v-list-item value="hdhd">
            <template v-slot:prepend>
              <v-avatar  size="x-small">
                <v-icon icon="mdi-plus-circle" color="blue-darken-4"></v-icon>
              </v-avatar>
             
              <div class="ma-2 text-blue-darken-4">Add task</div>
              
             
            </template>
           
           </v-list-item> -->  
        <v-divider></v-divider>
          <v-list-item >
            <template v-slot:prepend>
              
             
              <div class="text-grey-darken-3">Actions</div>
              
             
            </template>
            <template v-slot:append>
             <v-icon color="black" >mdi-view-list
             </v-icon>
            </template>
           </v-list-item>
          <v-list-item value="cctv" to="/cctv">
            <template v-slot:prepend>
              <v-avatar  size="x-small">
                <v-icon icon="mdi-cctv"></v-icon>
              </v-avatar>
             
              <div class="ma-2 TE">CCTV</div>
              
             
            </template>
            <!-- <template v-slot:append>
             
             
              <v-avatar>5</v-avatar>
            </template> -->
           </v-list-item>
           <v-list-item value="history" to="/history">
            <template v-slot:prepend>
              <v-avatar  size="md">
                <v-icon icon="mdi-history"></v-icon>
              </v-avatar>
             
              <div class="ma-2">History</div>
              
             
            </template>
            <!-- <template v-slot:append>
             
             
              <v-avatar>5</v-avatar>
            </template> -->
           </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- App Bar -->
      <v-app-bar
        density="compact"
        elevation="0"
      >
        <v-btn icon>
          <v-icon>mdi-menu-open</v-icon>
        </v-btn>

        <div class="pt-2" ><v-avatar size="40px" icon="mdi-cctv" color="green" icon-color="yellow">
          
        </v-avatar>
      Survellance AI
      
      
      </div>

        <v-spacer></v-spacer>

       
       
       

        
        <v-btn  class="text-none" append-icon="mdi-tune">
          Settings
        </v-btn>
        <v-btn append-icon="mdi-white-balance-sunny" class="text-none">
          Mode
        </v-btn>
      </v-app-bar>
   <v-main scrollable>
    <router-view>
      
    </router-view>
   </v-main>
    
  </v-app>
</template>


<script>
export default {
  name: 'InsideLayout',
  data() {
    return {
      tab: null,
      items: [
        {
          title: 'Item #1',
          value: 1,
          props: {
            prependIcon: 'mdi-home',
          },
        },
        {
          title: 'Item #2',
          value: 2,
          props: {
            appendIcon: 'mdi-close',
          },
        },
        {
          title: 'Item #3',
          value: 3,
          props: {
            color: 'blue-darken-4',
          },
        },
      ],
    };
  },
};
</script>

<style>
@import 'vuetify/styles';

.parent-container {
  display: flex;
  align-items: center; /* Centers the child vertically */
  justify-content: center; /* Centers the child horizontally */
  height: 87px; /* Adjust this to the desired height of the parent container */
}

.custom-text-field {
  width: 200px; /* Adjust the width as needed */
}
</style>
