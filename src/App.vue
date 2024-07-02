<template>
  <v-app>
    <v-navigation-drawer elevation="1"
                         class="navigation-drawer"
                         width="300"
                         mobile-breakpoint="sm">
      <MainMenu />    
    </v-navigation-drawer>
    <v-main class="fill-height d-flex flex-column flex-grow-1">
      <v-container class="pt-1 flex-grow-1">
        <div class="pt-1 min-w-0 w-100 h-100">
          <RouterView />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>


<style scoped>
.navigation-drawer {
  z-index: 9999;
  position: fixed !important;
}
</style>
