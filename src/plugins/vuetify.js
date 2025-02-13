// src/plugins/vuetify.js

// src/plugins/vuetify.js

import { createVuetify } from 'vuetify'  // Import Vuetify 3
import 'vuetify/styles'  // Import Vuetify global styles
import '@mdi/font/css/materialdesignicons.css'

// Import all Vuetify components by using a wildcard import
import * as components from 'vuetify/components'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
const vuetify = createVuetify({
  components,  // Register all components
  theme: {
    defaultTheme: 'light', // Optional: set the default theme
  },
})

export default vuetify

