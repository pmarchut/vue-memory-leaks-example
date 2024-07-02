<template>
  <v-list nav
          density="compact">
          <v-list-item
            to="/projects"
            link
            density="compact"
            color="primary"
          >
            <v-list-item-title class="font-weight-bold">Projects</v-list-item-title>
          </v-list-item>
          <v-list-item
            to="/issues"
            link
            density="compact"
            color="primary"
          >
            <v-list-item-title class="font-weight-bold">Issues</v-list-item-title>
          </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>
