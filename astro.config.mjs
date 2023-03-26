import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
const buildType = import.meta.env.PROD ? '/saltmine' : '/';

export default defineConfig({
  base: buildType,
  integrations: [tailwind(), image(), react(), astroI18next()],
});
