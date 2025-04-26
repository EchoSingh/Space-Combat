import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/client/game.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
      "fs": false,
      "path": false,
      "crypto": false
    },
    alias: {
      'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js',
      'socket.io-client': 'socket.io-client/dist/socket.io.js'
    }
  }
}; 