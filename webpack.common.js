const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/javascript/search.js',
    map: './src/javascript/map.js',
    crafts_articles: './src/javascript/crafts_articles.js',
    craft_article: './src/javascript/craft_article.js'
    // page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    // Search
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['search']
    }),

    // // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // About
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index']
    }),

    // Crafts — страница со всеми материалами о ремёслах
    new HtmlWebpackPlugin({
      template: './src/crafts.html',
      filename: './crafts.html',
      chunks: ['crafts_articles']
    }),

    // Article — страница со всеми подборками и мини-статьями
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['crafts_articles']
    }),

    // Craft, уэленская резьба по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/uelen-bone-carving.html',
      filename: './crafts/uelen-bone-carving.html',
      chunks: ['craft_article']
    }),

    // Craft, сопинская керамика по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/skopinsk-ceramic.html',
      filename: './crafts/skopinsk-ceramic.html',
      chunks: ['craft_article']
    }),

    // Craft, вологодское кружево по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/vologodskoe-lace.html',
      filename: './crafts/vologodskoe-lace.html',
      chunks: ['craft_article']
    }),

    // Craft, городецская роспись по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/gorodets-painting.html',
      filename: './crafts/gorodets-painting.html',
      chunks: ['craft_article']
    }),

    // Craft, ракульская роспись по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/rakul-painting.html',
      filename: './crafts/rakul-painting.html',
      chunks: ['craft_article']
    }),

    // Craft,  дымская игрушка по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/dimskaya-toy.html',
      filename: './crafts/dimskaya-toy.html',
      chunks: ['craft_article']
    }),

    // Craft,  абашевская по кости — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/abashevskaya-toy.html',
      filename: './crafts/abashevskaya-toy.html',
      chunks: ['craft_article']
    }),

    // Craft,  тверская вышивка — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/tverskaya-lace.html',
      filename: './crafts/tverskaya-lace.html',
      chunks: ['craft_article']
    }),

    // Craft,  тульская сталь — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/tulskaya-stal.html',
      filename: './crafts/tulskaya-stal.html',
      chunks: ['craft_article']
    }),

    //Craft, великоустюгская роспись — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/velikoustugskaya-rospis.html',
      filename: './crafts/velikoustugskaya-rospis.html',
      chunks: ['craft_article']
    }),


    //Craft, вологодская хохлома — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/vologodskaya-hohloma.html',
      filename: './crafts/vologodskaya-hohloma.html',
      chunks: ['craft_article']
    }),

    //Craft, палехская миниатюра  — страница отдельного ремесла
    new HtmlWebpackPlugin({
      template: './src/crafts/palehskaya-min.html',
      filename: './crafts/palehskaya-min.html',
      chunks: ['craft_article']
    }),

    // Articles, У каких народов есть резьба по кости — отдельная страница подборки/мини-статьи
    new HtmlWebpackPlugin({
      template: './src/articles/bone-carving.html',
      filename: './articles/bone-carving.html',
      chunks: ['index']
    }),

    // Map
    new HtmlWebpackPlugin({
      template: './src/map.html',
      filename: './map.html',
      chunks: ['map']
    }),

    //Lending
    new HtmlWebpackPlugin({
      template: './src/lending.html',
      filename: './lending.html',
      chunks: ['index']
    }),

    //Preview
    new HtmlWebpackPlugin({
      template: './src/preview.html',
      filename: './preview.html',
      chunks: ['index']
    }),

    //Styleguide
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
