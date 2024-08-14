const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
    // Outras configurações do devServer podem ser adicionadas aqui
  },
});
