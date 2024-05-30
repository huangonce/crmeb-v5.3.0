// 请求接口地址 根据环境判断
// 接口配置 在根目录 env.js 进行配置
let VUE_APP_API_URL

// 默认打包设置，如果使用SEO打包，请注释下面三行代码
if (process.browser) {
  VUE_APP_API_URL = `${process.env.NUXT_ENV.VUE_APP_API_URL}` || `${location.origin}/api`;
}
// SEO打包设置，如果使用SEO打包，请将下方代码打开
// VUE_APP_API_URL = '您的域名/api';

const Setting = {
  // 接口请求地址
  apiBaseURL: VUE_APP_API_URL,
};

export default Setting;
