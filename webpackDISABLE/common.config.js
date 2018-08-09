// webpack plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

  entry: {
    'app': [
      './src/bootstrap.js'
    ],
    'vendor': './src/vendor.js'
  },

  resolve: {

    extensions: ['.js', '.scss'],

    modules: ['node_modules']

  },

  module: {

    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.json$/,
        loader: 'json'
      },

      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000'
      },

      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }

    ]

  },

  

  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity
    })
  ]

};
