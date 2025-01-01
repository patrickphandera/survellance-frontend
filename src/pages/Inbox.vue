<template>
    <div>
    <v-app-bar
            density="compact"
            elevation="1"
          >
            <v-btn icon>
              <v-icon >mdi-message-badge</v-icon>
            </v-btn>
    
            <div class=" ">You're welcome, Patrick!</div>
    
            <v-spacer></v-spacer>
    
            <v-btn
              append-icon="mdi-filter-variant"
              class="text-none"
            >
              Filter
            </v-btn>
            <v-btn
              append-icon="mdi-sort"
              class="text-none"
            >
              Sort
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-more-vert</v-icon>
            </v-btn>
    
            <div class="parent-container">
              <v-text-field
                size="xsmall"
                density="compact"
                variant="outlined"
                class="h-50 m-small custom-text-field"
                label="Search"
              ></v-text-field>
            </div>
    
           
          </v-app-bar>
          <v-card class="ma-2 " elevation="1"
        
          >
          <v-expansion-panels
          v-model="panel"
          :disabled="disabled"
      
      multiple
          >
            <v-expansion-panel>
                <v-list lines="one">
            <v-list-item>
            <div
               class="text-blue-darken-4"
              >This week tasks<span class="mx-1 text-body-2"  >- 5</span></div>
              
              <template v-slot:append>
            
          <v-btn
            color="blue-darken-4"
    class="text-none"
            elevation="0"
          >Add this week task <v-icon>mdi-plus</v-icon></v-btn>
        </template>
             </v-list-item>
             <v-divider></v-divider>
      <v-list-item
        
        key="folder.title"
        subtitle="30 June"
        title="Designing my application UI"
      >
        <template v-slot:prepend>
          
            <v-icon  size="small" color="success">mdi-progress-check</v-icon>
         
        </template>

        <template v-slot:append>
            <v-btn
            density="dense"
           prepend-icon="mdi-pound"
           variant="tonal"
           class="text-none text-caption" elevation="0"
          >Education</v-btn>
          <v-btn
          variant="text"
        icon="mdi-dots-horizontal-circle-outline"
           
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
       
        key="folder.title"
        subtitle="10 March"
        title="Do weekly reviews of my tasks"
      >
        <template v-slot:prepend>
          
            <v-icon  size="small" color="warning">mdi-progress-alert</v-icon>
         
        </template>

        <template v-slot:append>
            <v-btn
            density="dense"
           prepend-icon="mdi-pound"
           variant="tonal"
           class="text-none text-caption " elevation="0"
          >Projects</v-btn>
          <v-btn
            
            icon="mdi-dots-horizontal-circle-outline"
            variant=""
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
</v-expansion-panel>
   </v-expansion-panels>
</v-card>
</div>
  </template>
  
  <script>
  export default {
    
    data: () => ({ 
        
      
        disabled: false,
        panel: [0, 1],
        files: [
        {
          color: 'blue',
          icon: 'mdi-clipboard-text',
          subtitle: 'Jan 20, 2014',
          title: 'Vacation itinerary',
        },
        {
          color: 'amber',
          icon: 'mdi-gesture-tap-button',
          subtitle: 'Jan 10, 2014',
          title: 'Kitchen remodel',
        },
      ],
      folders: [
        {
          subtitle: 'Jan 9, 2014',
          title: 'Photos',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: 'Recipes',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Work',
        },
      ],
      })
    
  };
  </script>
  
  
  