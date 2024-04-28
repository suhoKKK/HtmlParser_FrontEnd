const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map'
  }
})

// module.exports = {
//   // devServer: {
//   //   proxy: 'http://localhost:9090'
//   // }
// //   server: {
// //     proxy: {
// //         '/api': 'http://localhost:9090'
// //     }
// // }

// devServer: {
//   proxy: {
//     '/api/': { // /api/로 시작하는 url은 아래의 전체 도메인을 추가하고, 옵션을 적용 
//       target: 'http://localhost:9090', // 클라이언트에서 api로 보내는 요청은 주소를 3095로 바꿔서 보내겠다 라는 뜻
//       changeOrigin: true, // cross origin 허용 설정
//       pathRewrite: {
//         '^api': ''
//       }
//     },
//   },
// },
// };
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090', // Spring Boot 서버의 포트
        // ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '',
        // },
      },
    },
  },
};