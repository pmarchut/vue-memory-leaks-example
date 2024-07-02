<template>
    <div class="default-table-cell"
         @mouseover="mouseenter = true"
         @mouseleave="mouseenter = false">
      <v-tooltip v-if="mouseenter && tooltip"
                 location="bottom">
        <template #activator="{ props }">
          <div class="d-flex align-center"
               :style="{ color: color }"  
               v-bind="props">
            <v-icon v-if="icon"
                    size="small"
                    :style="'margin-right: 4px;'">
              mdi-{{ icon }}
            </v-icon>
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
              {{ valueToRender }}
            </span>
          </div>
        </template>
        <span>
          {{ tooltip || valueToRender }}</span>
      </v-tooltip>
      <div v-else
           class="d-flex align-center"
           :style="{ color: color }">
        <v-icon v-if="icon"
                size="x-small"
                :style="'margin-right: 4px;'">
          mdi-{{ icon }}
        </v-icon>
        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
          {{ valueToRender }}
        </span>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'DefaultTableCell',
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
        mouseenter: false
      }
    },
    computed: {
      rowValue() {
        return this.row[this.columnName]
      },
      valueToRender() {
        const valueCandidate = (typeof this.rowValue === 'string' || typeof this.rowValue === 'number' || this.rowValue === null)
          ? this.rowValue : (this.rowValue?.value || this.rowValue?.name)
  
        return valueCandidate || this.defaultValue || '-'
      },
      icon() {
        return typeof this.row[this.columnName] === 'object' && this.row[this.columnName] !== null ? this.row[this.columnName].icon : ''
      },
      tooltip() {
        return typeof this.row[this.columnName] === 'object' && this.row[this.columnName] !== null ? this.row[this.columnName].tooltip : ''
      },
      color() {
        return typeof this.row[this.columnName] === 'object' && this.row[this.columnName] !== null ? this.row[this.columnName].color : ''
      }
    },
    beforeUnmount() {
      this.mouseenter = null
    }
  }
</script>
  
<style scoped>
.default-table-cell {
  max-width: 100%;
}
</style>
  