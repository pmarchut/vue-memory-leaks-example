<template>
    <v-data-table-server ref="table"
                         :headers="columns.map(item => ({ ...item, title: item.label }))"
                         :items="items"
                         :item-key="identifierColumn"
                         :selectable-key="identifierColumn"
                         :loading="loading"
                         fixed-header
                         :height="-1"
                         :items-length="totalElements"
                         mobile-breakpoint="960">
      <!--  Rows  -->
      <!-- Workaround dla slotów vuetify -->
        <template #no-data
                  v-if="!$slots['no-data']">
            <tr class="v-data-table-rows-loading">
                <td :colspan="headers.length + showSelect">
                    {{ loading ? 'loading' : 'emptyList' }}
                </td>
            </tr>
        </template>
        <template #body></template>
        <template #tbody="{ items: rows }">
            <tbody v-if="!rows.length">
            <tr
                class="v-data-table-rows-loading">
                <td>{{ loading ? 'loading' : 'emptyList' }}</td>
            </tr>
            </tbody>
            <tr v-else 
                v-for="item in rows"
                :key="item[identifierColumn]"
                tabindex="0">
                <td v-for="(column, index) in columns"
                    :key="column.key"
                    style="height: 40px;">
                <component :is="getComponentName(column.type)"
                            default-value="No Data"
                            :row="item"
                            :column-name="column.key"
                            :disabled="item.unremovable"
                            v-bind="{...column.props, ...$attrs, class: ''}"
                            :tab-index="index + 1"
                            :identifier-column="identifierColumn"
                            :format="column.format"
                            :submodule-form-id="submoduleFormId"
                            :module-name="moduleName"
                            :submodule-name="submoduleName" />
                </td>
            </tr>
        </template>
  
        <template #bottom/>
    </v-data-table-server>
</template>
  
<script>
import { getColumnComponentName } from '@/services/table.service'
  
export default {
    name: 'ConfigurableTable',
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      items: {
        type: Array,
        default: () => []
      },
      identifierColumn: {
        type: String,
        default: 'id'
      },
      loading: {
        type: Boolean
      }
    },
    methods: {
      getComponentName(columnType) {
        return getColumnComponentName(columnType)
      }
    }
  }
  </script>
  