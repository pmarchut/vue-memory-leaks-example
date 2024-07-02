<template>
    <div @mouseover="mouseenter = true"
         @mouseleave="mouseenter = false">
      <v-tooltip v-if="mouseenter && valueToRender"
                 location="bottom">
        <template #activator="{ props }">
          <v-chip size="small"
                  class="font-weight-bold text-truncate"
                  :label="label"
                  v-bind="props">{{ valueToRender }}</v-chip>
        </template>
        <span>
          {{ valueToRender }}</span>
      </v-tooltip>
      <v-chip v-else-if="valueToRender"
              size="small"
              class="font-weight-bold text-truncate"
              :label="label">{{ valueToRender }}</v-chip>
    </div>
</template>
  
<script>
export default {
    name: 'LabelCell',
    props: {
      translateValue: {
        type: Boolean
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
      valueToRender() {
        const valueCandidate = this.row[this.columnName]
  
        return valueCandidate
      }
    },
    beforeUnmount() {
      this.mouseenter = null
    }
  }
  </script>
  