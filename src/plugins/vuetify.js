// src/plugins/vuetify.js
import 'vuetify/styles'; // Ensure you are using css-loader
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi';

import * as labsComponents from 'vuetify/labs/components'
export default createVuetify({
  components: {
    ...labsComponents,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
});
