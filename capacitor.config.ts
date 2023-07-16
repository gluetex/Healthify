import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.emreertug.app',
  appName: 'Healthify',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
