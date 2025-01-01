<template>
    <div>
    <v-app-bar
            density="compact"
            elevation="1"
          >
            <v-btn icon class="ml-2">
              <v-icon >mdi-message-outline</v-icon>
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
                class="h-50 m-small custom-text-field mr-2"
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
              >Today tasks<span class="mx-1 text-body-2"  >- 5</span></div>
              
              <template v-slot:append>
          <v-menu>
      <template v-slot:activator="{ props }">
        
        <v-btn
        v-bind="props"
            color="blue-darken-4"
    class="text-none"
            elevation="0"
          >Add today task <v-icon>mdi-plus</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title><v-icon icon="mdi-pound"></v-icon>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-dialog activator="parent" max-width="500">
          <template v-slot:default="{ isActive }">
            <v-card rounded="lg">
              <v-card-title class="d-flex justify-space-between align-center">
                <div class="text-h5 text-medium-emphasis ps-2">
                  Invite John to connect
                </div>

                <v-btn
                  icon="mdi-close"
                  variant="text"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-title>

              <v-divider class="mb-4"></v-divider>

              <v-card-text>
                <div class="text-medium-emphasis mb-4">
                  Invite collaborators to your network and grow your connections.
                </div>

                <div class="mb-2">Message (optional)</div>

                <v-textarea
                  :counter="300"
                  class="mb-2"
                  rows="2"
                  variant="outlined"
                  persistent-counter
                ></v-textarea>

                <div class="text-overline mb-2">💎 PREMIUM</div>

                <div class="text-medium-emphasis mb-1">
                  Share with unlimited people and get more insights about your network. Try Premium Free for 30 days.
                </div>

                <v-btn
                  class="text-none font-weight-bold ms-n4"
                  color="primary"
                  text="Retry Premium Free"
                  variant="text"
                ></v-btn>
              </v-card-text>

              <v-divider class="mt-2"></v-divider>

              <v-card-actions class="my-2 d-flex justify-end">
                <v-btn
                  class="text-none"
                  rounded="xl"
                  text="Cancel"
                  @click="isActive.value = false"
                ></v-btn>

                <v-btn
                  class="text-none"
                  color="primary"
                  rounded="xl"
                  text="Send"
                  variant="flat"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-list>
    </v-menu>
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
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      
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
  
  
  