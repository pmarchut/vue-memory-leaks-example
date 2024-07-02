/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'

const app = createApp(App)

app.component('DefaultTableCell', defineAsyncComponent(() => import('@/components/table_components/DefaultTableCell.vue')));
app.component('CopyInputCell', defineAsyncComponent(() => import('@/components/table_components/CopyInputCell.vue')));
app.component('InitialsRelationshipCell', defineAsyncComponent(() => import('@/components/table_components/InitialsRelationshipCell.vue')));
app.component('LabelCell', defineAsyncComponent(() => import('@/components/table_components/LabelCell.vue')));
app.component('TagsRelationshipCell', defineAsyncComponent(() => import('@/components/table_components/TagsRelationshipCell.vue')));

registerPlugins(app)

app.mount('#app')
