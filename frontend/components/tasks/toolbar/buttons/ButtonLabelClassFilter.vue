<template>
  <v-menu >
    <template #activator="{ on: menu }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn icon v-on="{ ...tooltip, ...menu }">
            <v-icon>
              {{ mdiFilter }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ $t('annotation.selectFilterTooltip') }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item-group v-model="selected" mandatory>
        <v-list-item 
                  v-for="(item, index) in uniqueLabelNames" :key="item">
          <v-list-item-icon>
            <v-icon v-if="selected === index">
              {{ mdiCheck }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item }}
              
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    

  </v-menu>
  
</template>

<script>
import { mdiFilter, mdiCheck } from '@mdi/js'

export default {
  props: {
    value: {
      type: String,
      default: '',
      required: true
    },
    labelTypes:{
      type: Array,
      default :() => {
        return this.labelTypes || []; // Provide a default if labelTypes is undefined
      }
    },
    uniqueLabelNames:{
      type: Array,
      default :() => {
        return this.uniqueLabelNames || []; // Provide a default if labelTypes is undefined
      }
    }
  },

  data() {
    return {
      items: [
        { title: this.$t('annotation.filterOption1'), param: '' },
        { title: this.$t('annotation.filterOption2'), param: 'true' },
        { title: this.$t('annotation.filterOption3'), param: 'false' }
      ],
      mdiFilter,
      mdiCheck
    }
  },

  computed: {
    selected: {
      get() {
        const index = this.items.findIndex((item) => item.param === this.value)
        return index === -1 ? 0 : index
      },
      set(value) {
        this.$emit('click:filter', this.items[value].param)
      }
    },
     
    projectId() {
      return this.$route.params.id
    }
  }
}

//  stop here
</script>