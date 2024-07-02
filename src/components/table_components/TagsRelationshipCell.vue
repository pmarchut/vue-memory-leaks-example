<template>
    <v-row v-if="listToRender.length"
           style="margin:0px !important"
           class="tags-relationship-cell-row"
           align="center"
           @click.stop="show">
      <v-chip :color="listToRender[0].color"
              size="small">
        <span>#{{ listToRender[0].display_name }}</span>
      </v-chip>
      <div v-if="listToRender[1]">
        <v-avatar style="border: 2px solid #fff !important"
                  size="32"
                  color="blue-grey-lighten-3">
          <span class="text font-weight-bold">+{{ listToRender.length - 1 }}</span>
        </v-avatar>
      </div>
      <v-menu v-if="showMenu"
              v-model="showMenu"
              z-index="99999"
              activator="parent">
        <v-list v-if="listToRender.length"
                density="compact">
          <v-list-item v-for="tag in listToRender"
                       :key="tag.id"
                       class="tags-relationship-cell-list-item">
            <v-chip :color="tag.color"
                    size="small">
              <span>#{{ tag.display_name }}</span>
            </v-chip>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <div v-else
         :style="'white-space: nowrap; overflow: hidden; text-overflow: ellipsis'">
      {{ defaultValue }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'TagsRelationshipCell',
    props: {
      defaultValue: {
        type: [String, Number],
        default: ''
      },
      row: {
        type: Object,
        default: () => ({})
      },
      columnName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showMenu: false,
        x: 0,
        y: 0
      }
    },
    computed: {
      listToRender() {
        const valueCandidate = this.row[this.columnName]
  
        return valueCandidate || []
      }
    },
    beforeUnmount() {
      this.showMenu = null
      this.x = null
      this.y = null
    },
    methods: {
      show(e) {
        if (this.showMenu) {
          this.showMenu = false
        } else {
          this.x = e.clientX
          this.y = e.clientY
          this.$nextTick(() => {
            this.showMenu = true
          })
        }
      }
    }
  }
</script>
  
<style scoped>
.tags-relationship-cell-list-item {
  padding-top: 4px;
  padding-bottom: 4px;
}
  
.tags-relationship-cell-row {
  flex-wrap: nowrap;
}
</style>
  