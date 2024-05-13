declare module 'cypress-light-theme' {
  /**
   * Sets the theme of the Cypress command log, using the environment settings.
   * Defaults to `system`. Can be set to `light` or `dark` using the `THEME` configuration.
   * (Alternatively, the `CYRPRESS_THEME` environment variable, from the command line).
   * 
   * @example
   ```
   // e2e.js or component.js
   import setLightTheme from 'cypress-light-theme'
   setLightTheme();

   // Optionally:
   // cypress.config.js
   const { defineConfig } = require('cypress')
   module.exports = defineConfig({
       env: {
           THEME: 'light' // or 'dark' or 'system'
       }
   });
   ```
   */
  export default function setLightTheme(): void;
}