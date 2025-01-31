import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

// Definindo __dirname para ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "Relacionamento",  // Nome do microfrontend consumidor
        remotes: {
          Relacionamento: "Relacionamento@http://localhost:3001/static/chunks/remoteEntry.js",  // URL correta do remoteEntry.js do microfrontend Relacionamento
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Prime": "./src/components/Prime", // Expondo o componente Prime
        },
        shared: {},
      })
    );
    
    // Adicionando o alias para o caminho correto
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};

export default nextConfig;
