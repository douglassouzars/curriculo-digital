//const { defineConfig } = require('@vue/cli-service');

//module.exports = defineConfig({
 // transpileDependencies: true,
  //publicPath: process.env.NODE_ENV === 'production'
   // ? '/'  // Use a URL base para GitHub Pages
    //: '/',
  //devServer: {
   // headers: {
    //  'Content-Type': 'text/html; charset=UTF-8',
    //},
    // Outras configura��es do devServer podem ser adicionadas aqui
 // },
//});
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'  // Use a URL base para GitHub Pages
    : '/',
  devServer: {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
    // Forçar todas as requisições a usarem UTF-8
    compress: true,
    open: true,  // Para abrir o navegador automaticamente
  },
});
