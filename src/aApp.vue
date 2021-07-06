<template>
  <v-app>
      <v-app-bar app>
      <v-main app>
          <v-navigation-drawer app>
              <v-list>
                 <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
        >
                       <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
                  </v-list-item>
                  
              </v-list>

          </v-navigation-drawer>
      </v-main>
      </v-app-bar>
      <v-container app>
           <router-view/>
      </v-container>
  </v-app>
</template>

<script>
export default {
    name: 'app',
    data(){
        return{
            item:[
              { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
          { title: 'gridSystem', icon: 'mdi-view-dashboard', to:'/grid-system' },
          { title: 'gridlistpage', icon: 'mdi-view-dashboard', to:'/grid-list'},
          { title: 'bp', icon: 'mdi-view-dashboard', to:'/breakpoint'},
          { title: 'typo', icon: 'mdi-view-dashboard', to:'/typography'},
          { title: 'table', icon: 'mdi-view-dashboard', to:'/table'}
            ]
        }
    }

}
</script>

<style>

</style>