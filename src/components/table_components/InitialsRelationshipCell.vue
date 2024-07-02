<template>
    <div @mouseover="mouseenter = true"
         @mouseleave="mouseenter = false">
      <div class="d-flex align-center"
           style="width: 100%; height: 32px;">
        <v-row style="margin:0px !important"
               align="center"
               @click.stop="show">
          <div v-for="(member, index) in listToRender.slice(0, howManyAvatars + 1)"
               :key="`${member.id} ${index}`">
            <v-tooltip v-if="mouseenter && (index < howManyAvatars)"
                       location="bottom">
              <template #activator="{ props }">
                <v-avatar class="mr-1"
                          style="border: 2px solid #fff !important"
                          :color="member.color"
                          size="32"
                         
                          v-bind="props">
                  <span class="text font-weight-bold">{{ member.initials }}</span>
                </v-avatar>
              </template>
              <span>{{ member.display_name }}</span>
            </v-tooltip>
            <v-avatar v-else-if="index < howManyAvatars"
                      class="mr-1"
                      style="border: 2px solid #fff !important"
                      :color="member.color"
                      size="32">
              <span class="text font-weight-bold">{{ member.initials }}</span>
            </v-avatar>
            <v-avatar v-if="index === howManyAvatars"
                      class="mr-1"
                      style="border: 2px solid #fff !important"
                      size="32"
                      color="blue-grey-lighten-3">
              <span class="text font-weight-bold">+{{ listToRender.length - howManyAvatars }}</span>
            </v-avatar>
          </div>
        </v-row>
        <v-menu v-if="listToRender.length && showMenu"
                v-model="showMenu"
                z-index="99999"
                activator="parent">
          <v-list density="compact">
            <v-list-item v-for="(tag, index) in listToRender"
                         :key="`${tag.id} ${index}`">
              <v-list-item-title>{{ tag.display_name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'InitialsRelationshipCell',
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
        mouseenter: false,
        showMenu: false,
        x: 0,
        y: 0
      }
    },
    computed: {
      listToRender() {
        const valueCandidate = this.row[this.columnName]
  
        return valueCandidate || []
      },
      howManyAvatars() {
        return this.$vuetify.display.smAndDown ? 3 : 4
      }
    },
    beforeUnmount() {
      this.mouseenter = null
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
  