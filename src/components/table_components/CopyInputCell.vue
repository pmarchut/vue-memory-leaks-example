<template>
    <div v-if="valueToRender"
         class="font-weight-bold"
         @mouseover="mouseenter = true"
         @mouseleave="mouseenter = false">
      <v-tooltip v-if="mouseenter"
                 location="bottom">
        <template #activator="{ props }">
          <div ref="copylabel"
               v-bind="props"
               @click.stop.prevent="copyValueCode(valueToRender)">
            {{ valueToRender }}
          </div>
        </template>
        <span>{{ copyText }}</span>
      </v-tooltip>
      <div v-else
           ref="copylabel"
           @click.stop.prevent="copyValueCode(valueToRender)">
        {{ valueToRender }}
      </div>
    </div>
</template>
   
<script>
export default {
    name: 'CopyInputCell',
    props: {
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
        text: 'Copy',
        copyText: '',
        mouseenter: false
      }
    },
    computed: {
      valueToRender() {
        const valueCandidate = this.row[this.columnName]
  
        return valueCandidate
      }
    },
    created() {
      this.copyText = this.text
    },
    beforeUnmount() {
      
      this.text = null
      this.copyText = null
      this.mouseenter = null
    },
    methods: {
      async copyValueCode(value) {
        await navigator.clipboard.writeText(value)
        this.copyText = 'Copied'
      },
      reset() {
        this.copyText = this.text
      }
    }
  }
</script>
  
<style scoped>
.copylabel {
  cursor: pointer;
  display: inline-block;
  border-bottom: 1px dashed;
  white-space: pre;
}
</style>
  