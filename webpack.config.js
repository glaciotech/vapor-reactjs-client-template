const path = require('path');

module.exports = {
  entry: './Sources/App/Frontend/app.js',  // Path to your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Public/Generated')  // Vapor serves static files from 'Public' by default
  },
    resolve: {
       modules: [path.resolve(__dirname, '../node_modules')]
    },
    // Add loaders, plugins, etc. as per your requirements
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/, // This regex matches both .js and .jsx files
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      },

    // Optionally, resolve .jsx extensions by default
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    devtool: 'source-map',
};
