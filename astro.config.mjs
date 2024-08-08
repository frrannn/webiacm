import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { defineConfig, passthroughImageService } from "astro/config";
export default defineConfig({
 image: {
   service: passthroughImageService(),
 },
});


// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
});
